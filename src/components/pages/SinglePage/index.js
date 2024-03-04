import { useEffect } from 'react';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import { selectPageByPath, selectPageData } from '@selectors/page';
import { useRouter } from '@hooks';
import { SinglePageTemplate } from '@templates';
import { PATHS } from '@constants/paths';

const SinglePage = () => {
  const { match } = useRouter();
  const pageParam = match.params.page;
  const page = useSelector((state) => selectPageByPath(state, pageParam));
  const pageData = useSelector((state) => selectPageData(state, page?.id));
  const title = page?.title;

  useEffect(() => {
    document.title = title;
  }, [title]);

  if (!page) {
    return <Redirect to={PATHS.PAGE_404} />;
  }

  return <SinglePageTemplate data={pageData} />;
};

export default SinglePage;
