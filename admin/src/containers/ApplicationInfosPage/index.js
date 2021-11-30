import React, { memo, useMemo } from 'react';
import { Header } from '@buffetjs/custom';
import { Flex, Padded, Text } from '@buffetjs/core';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { useIntl } from 'react-intl';
import { BaselineAlignment } from 'strapi-helper-plugin';
import Bloc from '../../components/Bloc';
import PageTitle from '../../components/SettingsPageTitle';
import makeSelectApp from '../App/selectors';
import makeSelectAdmin from '../Admin/selectors';

import { Link } from 'react-router-dom';

const makeSelectAppInfos = () => createSelector(makeSelectApp(), appState => appState.appInfos);
const makeSelectLatestRelease = () =>
  createSelector(makeSelectAdmin(), adminState => ({
    latestStrapiReleaseTag: adminState.latestStrapiReleaseTag,
    shouldUpdateStrapi: adminState.shouldUpdateStrapi,
  }));

const ApplicationInfosPage = () => {
  const { formatMessage } = useIntl();
  const selectAppInfos = useMemo(makeSelectAppInfos, []);
  const selectLatestRealase = useMemo(makeSelectLatestRelease, []);
  const appInfos = useSelector(state => selectAppInfos(state));
  const { shouldUpdateStrapi, latestStrapiReleaseTag } = useSelector(state =>
    selectLatestRealase(state)
  );

  const currentPlan = appInfos.communityEdition
    ? 'app.components.UpgradePlanModal.text-ce'
    : 'app.components.UpgradePlanModal.text-ee';

  const headerProps = {
    title: { label: formatMessage({ id: 'Settings.application.title' }) },
    content: formatMessage({
      id: 'Settings.application.description',
    }),
  };
  const pricingLabel = formatMessage({ id: 'Settings.application.link-pricing' });
  const upgradeLabel = formatMessage({ id: 'Settings.application.link-upgrade' });
  const strapiVersion = formatMessage({ id: 'Settings.application.strapi-version' });
  const nodeVersion = formatMessage({ id: 'Settings.application.node-version' });
  const editionTitle = formatMessage({ id: 'Settings.application.edition-title' });

  /* eslint-disable indent */

  /* eslint-enable indent */

  return (
    <div>
     <title>PragICTS Support</title>

      <BaselineAlignment top size="3px" />
      <Bloc>
        <Padded left right top size="smd">
          <Padded left right top size="xs">
            <Flex justifyContent="space-between">

              <h4>Support : <a href="mailto:support@pragicts.com" style={{ color: '#008fce' }} > support@pragicts.com </a></h4>

              <h4>Contact Number :<a style={{ color:"#008fce" }} href="tel:+94 11 484 8288"> +94 11 484 8288</a></h4>


            </Flex>
            <Padded top size="lg">
              <Text fontSize="xs" color="grey" fontWeight="bold">
                 Version : 1.0

              </Text>


            </Padded>
          </Padded>
        </Padded>
        <BaselineAlignment top size="60px" />
      </Bloc>
    </div>
  );
};

export default memo(ApplicationInfosPage);
