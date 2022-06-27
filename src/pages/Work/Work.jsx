import React, { useEffect, useState, Fragment } from 'react';
import { Helmet } from 'react-helmet';

import { BackToTop } from '../../common/components/UIElements';
import { Projects } from './components';
import useHttpClient from '../../common/hooks/http-hook';

const Work = () => {
  const { isLoading, error, sendRequest, show } = useHttpClient();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/project/projects`
        );
        setProjects(responseData);
      } catch (err) {}
    };
    fetchData();
  }, [sendRequest]);

  return (
    <Fragment>
      <Helmet>
        <title>Work | itsSahil</title>
        <meta name="description" content="Get to know what I do." />
        <meta property="og:title" content="Sahil Saini's Work" />
        <meta property="og:description" content="Get to know what I do." />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/itsrakesh/Portfolio/work_og_cli-eLMr5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646652255031"
        />
        <meta property="twitter:title" content="Sahil Saini's Work" />
        <meta property="twitter:description" content="Get to know what I do." />
        <meta
          property="twitter:image"
          content="https://ik.imagekit.io/itsrakesh/Portfolio/work_og_cli-eLMr5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646652255031"
        />
      </Helmet>
      <Projects
        projects={projects}
        isLoading={isLoading}
        error={error}
        show={show}
      />
      <BackToTop />
    </Fragment>
  );
};

export default Work;
