import React from 'react';
import { Padded, Text } from '@buffetjs/core';
import { useIntl } from 'react-intl';
import { useHistory } from 'react-router-dom';
import { BaselineAlignment } from 'strapi-helper-plugin';
import Button from '../../../../components/FullWidthButton';
import Box from '../Box';
import Logo from '../Logo';
import Section from '../Section';
import Envelope from './Envelope';

const ForgotPasswordSuccess = () => {
  const { formatMessage } = useIntl();
  const { push } = useHistory();

  const handleClick = () => {
    push('/auth/login');
  };

  return (
    <>
      <Section textAlign="center" className="logo-section" style={{ backgroundColor:"#ffffff",margin:"auto",width: "41.6rem" }}>
        <Logo />
      </Section>
      <Section  textAlign="center">
        <Padded >
          <Padded >
            <Box withoutError>
              <BaselineAlignment >
                <Envelope />
              </BaselineAlignment>

              <Padded >
                <Text fontWeight="bold" lineHeight="24px" fontSize="xl">
                  {formatMessage({ id: 'app.containers.AuthPage.ForgotPasswordSuccess.title' })}
                </Text>
              </Padded>

              <Padded right left size="lg">
                <Padded top size="smd">
                  <Text fontSize="md" style={{ textAlign: 'center' }} lineHeight="18px">
                    {formatMessage({
                      id: 'app.containers.AuthPage.ForgotPasswordSuccess.text.email',
                    })}
                  </Text>

                  <Padded top>
                    <BaselineAlignment top size="7px">
                      <Text fontSize="md" style={{ textAlign: 'center' }} lineHeight="18px">
                        {formatMessage({
                          id: 'app.containers.AuthPage.ForgotPasswordSuccess.text.contact-admin',
                        })}
                      </Text>
                    </BaselineAlignment>
                  </Padded>
                </Padded>
              </Padded>

              <Padded top size="md">
                <Button
                  type="button"
                  color="primary"
                  textTransform="uppercase"
                  onClick={handleClick}
                >
                  {formatMessage({ id: 'Auth.link.signin' })}
                </Button>
              </Padded>
            </Box>
          </Padded>
        </Padded>
      </Section>
    </>
  );
};

export default ForgotPasswordSuccess;
