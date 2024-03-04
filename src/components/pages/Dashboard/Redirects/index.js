import { Table, Spacing, Button, BUTTON_TYPES } from '@atoms';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import redirectActions from '@actions/redirects';
import uiActions from '@actions/ui';
import { hasMore, selectRedirectsCount, selectRedirectsDataASC, selectRedirectsDataDESC } from '@selectors/redirects';
import { CREATE_REDIRECT } from '@constants/modals';
import { getColumns } from './columns';

const LIMIT = 5;
export const SORT_TYPES = {
  ASC: 'asc',
  DESC: 'desc',
};

const Redirects = () => {
  const [selectedRedirects, setSelectedRedirects] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dateSort, setDateSort] = useState(SORT_TYPES.ASC);
  const dispatch = useDispatch();
  const findAll = (payload) => dispatch(redirectActions.find(payload));
  const remove = (payload) => dispatch(redirectActions.remove(payload));
  const ascSortedData = useSelector(selectRedirectsDataASC);
  const descSortedData = useSelector(selectRedirectsDataDESC);
  const data = dateSort === SORT_TYPES.ASC ? ascSortedData : descSortedData;
  const total = useSelector(selectRedirectsCount);
  const hasMoreRows = useSelector(hasMore);

  const findAllRedirects = () => {
    const offset = Number(currentPage - 1) ? LIMIT * Number(currentPage - 1) : 0;
    findAll({ offset, limit: LIMIT, page: currentPage });
  };

  const onPageChange = (value) => setCurrentPage(Number(value));

  const selectAll = () => {
    const ids = data.map((m) => m.id);
    setSelectedRedirects(ids);
  };

  const deSelectAll = () => setSelectedRedirects([]);

  const toggleAll = () => {
    if (data.length !== selectedRedirects.length) {
      setSelectAllChecked(true);
      selectAll();
    } else {
      setSelectAllChecked(false);
      deSelectAll();
    }
  };

  const selectRedirect = (id) => setSelectedRedirects([...selectedRedirects, id]);
  const deSelectRedirect = (id) => setSelectedRedirects(selectedRedirects.filter((i) => i !== id));

  useEffect(() => {
    if (!currentPage) {
      return;
    }
    findAllRedirects();
  }, [currentPage]);

  const openCreateModal = (data) =>
    dispatch(uiActions.openModal({ type: CREATE_REDIRECT, data: { ...data, findAll: findAllRedirects } }));

  const removeMultiple = () => {
    remove({ params: { redirect: selectedRedirects } });
  };

  return (
    <Fragment>
      <Spacing className='pt-4' />
      <div className='flex justify-between'>
        <Button type={BUTTON_TYPES.PRIMARY} children='Create redirect' onClick={() => openCreateModal(null)} />
        {selectedRedirects?.length ? (
          <Button type={BUTTON_TYPES.DANGER} children='Delete selections' onClick={removeMultiple} />
        ) : null}
      </div>

      <Spacing className='pt-2' />
      <Table
        columns={getColumns({
          remove,
          openEditModal: (data) => openCreateModal(data),
          selectAllChecked,
          toggleAll,
          selectedRedirects,
          selectRedirect,
          deSelectRedirect,
          dateSort,
          setDateSort,
        })}
        data={data}
        tableLayout='fixed'
        className='min-w-full'
      />
      <Spacing className='pt-4' />
      <Spacing className='pt-4' />
      {total && hasMoreRows ? (
        <Fragment>
          <Button
            children='Load more'
            type={BUTTON_TYPES.PRIMARY}
            onClick={() => onPageChange(Number(currentPage) + 1)}
          />

          <Spacing className='pt-4' />
        </Fragment>
      ) : null}
    </Fragment>
  );
};

export default Redirects;
