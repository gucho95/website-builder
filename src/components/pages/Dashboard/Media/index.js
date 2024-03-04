import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import mediaActions from '@actions/media';
import { selectMediaFiles, selectMedias } from '@selectors/media';
import { Spacing, MediaUploader, Pagination, Heading, Button, BUTTON_TYPES, BUTTON_SIZES } from '@atoms';
import { useHistory, useLocation } from 'react-router-dom';
import { getSearchParam, setSearchParams } from '@utils';
import Toolbar from './Toolbar';
import GridView from './Views/Grid';
import ListView from './Views/List';
import ui from '@actions/ui';
import { MEDIA } from '@constants/modals';
import { toast } from 'react-toastify';
import { useDebounce } from '@hooks';
import media from '@actions/media';

const LIMIT = 10;

const VIEWS = { LIST: 'list', GRID: 'grid' };

const isValidViewParam = (view) => Object.values(VIEWS).includes(view);
const isValidPageParam = (page) => Number(page) && Number(page) > 0 && !isNaN(Number(page));

const Media = ({ selectable, onMediaSelect }) => {
  const { search, pathname } = useLocation();
  const history = useHistory();
  const currentView = getSearchParam({ search, key: 'view' });
  const currentPage = getSearchParam({ search, key: 'page' });
  const [selectedMediaId, setSelectedMediaId] = useState(null);
  const [uploaderVisible, setUploaderVisible] = useState(null);
  const [selectedMedias, setSelectedMedias] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [searchText, setSearchText] = useState(null);
  const searchDebounce = useDebounce(searchText, 500);

  const { data } = useSelector(selectMedias);
  const medias = useSelector(selectMediaFiles);
  const total = data?.count;
  const isListView = currentView === VIEWS.LIST;
  const isGridView = currentView === VIEWS.GRID;

  const dispatch = useDispatch();
  const findAll = (payload) => dispatch(mediaActions.find(payload));
  const upload = (payload) => dispatch(mediaActions.create(payload));
  const openMediaModal = (payload) => dispatch(ui.openModal({ type: MEDIA, data: payload }));
  const generateThumbs = (payload) =>
    dispatch(
      mediaActions.generateThumbs({
        ...payload,
        width: 50,
        height: 50,
        afterSuccess: () => toast.success('Thumbnails successfully generated'),
        afterFail: () => toast.warn('Failed to generate thumbnails'),
      })
    );

  const findAllMedias = () => {
    const offset = Number(currentPage - 1) ? LIMIT * Number(currentPage - 1) : 0;
    findAll({
      offset,
      limit: LIMIT,
      search: searchText,
    });
  };

  const selectAllMedias = () => {
    const ids = medias.map((m) => m.id);
    setSelectedMedias(ids);
  };

  const deSelectAllMedias = () => {
    setSelectedMedias([]);
  };

  const toggleAll = () => {
    if (medias.length !== selectedMedias.length) {
      setSelectAllChecked(true);
      selectAllMedias();
    } else {
      setSelectAllChecked(false);
      deSelectAllMedias();
    }
  };

  const selectMedia = (id) => {
    setSelectedMedias([...selectedMedias, id]);
  };

  const deSelectMedia = (id) => {
    setSelectedMedias(selectedMedias.filter((i) => i !== id));
  };

  const applyAction = (action) => {
    if (action === 'delete' && selectedMedias.length) {
      removeMultipleMedia(selectedMedias);
    } else {
      action && alert(`Action ${action}`);
    }
  };

  const applyFilter = (filter) => {
    filter && alert(`Filter ${filter}`);
  };

  const removeMedia = (payload) => {
    dispatch(
      mediaActions.remove({
        params: { id: payload.id },
        afterSuccess: () => {
          payload?.afterSuccess && payload.afterSuccess();
          findAllMedias();
        },
      })
    );
  };

  const removeMultipleMedia = (ids) => {
    dispatch(mediaActions.remove({ params: { image: ids }, afterSuccess: () => findAllMedias() }));
  };

  const onPageChange = (value) => {
    const searchParams = setSearchParams({ search, params: [{ key: 'page', value }] });
    history.replace({ search: searchParams, pathname });
  };

  const onViewChange = (value) => {
    const searchParams = setSearchParams({ search, params: [{ key: 'view', value }] });
    history.replace({ search: searchParams, pathname });
  };

  //FETCH MEDIAS ON PAGE CHANGE
  useEffect(() => {
    if (!currentPage) {
      return;
    }
    findAllMedias();
  }, [currentPage, searchDebounce]);

  // CHECK VALID PARAMS ON MOUNT
  useEffect(() => {
    let searchParams = search;
    const invalidViewParams = !currentView || !isValidViewParam(currentView);
    const invalidPageParams = !currentPage || !isValidPageParam(currentPage);

    if (invalidViewParams) {
      searchParams = setSearchParams({ search: searchParams, params: [{ key: 'view', value: VIEWS.LIST }] });
    }

    if (invalidPageParams) {
      searchParams = setSearchParams({ search: searchParams, params: [{ key: 'page', value: 1 }] });
    }

    // IF NO IVALID PARAMS
    if (!invalidPageParams && !invalidViewParams) {
      return;
    }
    // IF THERE IS INVALID PARAMS
    history.replace({ search: searchParams, pathname });
  }, []);

  return (
    <div className='flex flex-col h-full max-h-full overflow-hidden'>
      <Spacing className='pt-2' />
      <div className='flex flex-shrink-0'>
        <Heading level={3} children='Media Library' />
        <Spacing className='pl-3' />
        <Button
          type={BUTTON_TYPES.CUSTOM}
          size={BUTTON_SIZES.CUSTOM}
          children='+ Add new'
          className='px-2 text-blue-light'
          onClick={() => setUploaderVisible(true)}
        />
      </div>

      {uploaderVisible ? (
        <div>
          <Spacing className='pt-2' />
          <div className='flex items-center'>
            <Heading level={5} children='Upload new media' />
            <Button
              type={BUTTON_TYPES.CUSTOM}
              size={BUTTON_SIZES.CUSTOM}
              children='Cancel'
              className='px-2 text-blue-light'
              onClick={() => setUploaderVisible(false)}
            />
          </div>
          <MediaUploader upload={upload} find={findAllMedias} />
          <Spacing className='pt-2' />
        </div>
      ) : null}

      <Spacing className='pt-2' />
      <Toolbar
        searchText={searchText}
        setSearchText={setSearchText}
        views={VIEWS}
        onViewChange={onViewChange}
        isListView={isListView}
        isGridView={isGridView}
        applyAction={applyAction}
        applyFilter={applyFilter}
      />
      <Spacing className='pt-2' />

      <div className='flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
        {isGridView ? (
          <GridView
            data={medias}
            selectedMediaId={selectedMediaId}
            setSelectedMediaId={setSelectedMediaId}
            removeMedia={removeMedia}
            generateThumbs={generateThumbs}
            openMediaModal={openMediaModal}
          />
        ) : (
          <ListView
            data={medias}
            removeMedia={removeMedia}
            openMediaModal={openMediaModal}
            generateThumbs={generateThumbs}
            selectedMedias={selectedMedias}
            selectMedia={selectMedia}
            deSelectMedia={deSelectMedia}
            toggleAll={toggleAll}
            selectAllChecked={selectAllChecked}
            removeMultipleMedia={removeMultipleMedia}
          />
        )}
        <Spacing className='pt-4' />
      </div>
      <div className='flex-shrink-0'>
        {total ? (
          <Pagination
            current={Number(currentPage)}
            pageSize={LIMIT}
            total={total}
            onChange={(params) => {
              onPageChange(params);
              setSelectedMediaId(null);
            }}
          />
        ) : null}
      </div>
      <Spacing className='pt-4' />
    </div>
  );
};

export default Media;
