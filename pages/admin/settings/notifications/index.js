import Switch from 'react-switch';
import Link from 'next/link';
import React, { useState } from 'react';

import { LoadingScreen } from '../../../../components/hoc/loading-screen';
import LayoutDashboard from '../../../../components/layouts/layout-dashboard';
import { Card, BackButton } from '../../../../components/partials';
import { NotificationsTable } from '../../../../components/admin/notifications/tables/notifications-table';
import { ViewLogsTable } from '../../../../components/admin/notifications/tables/view-logs-table';

const NotificationSystem = () => {
  const [hideOff, setHideOff] = useState(false);
  const [idList, setIdList] = useState();

  const getIds = React.useCallback(val => {
    setIdList(val);
  }, []);

  return (
    <LayoutDashboard>
      <Card className="h-full px-24 py-2">
        <div className="bg-transparent h-3/5 2xl:pb-5">
          <div className="w-full h-70px">
            <div className="h-70px flex flex-col justify-center">
              <div className="flex justify-between items-end pb-3">
                <div>
                  <BackButton href="/admin/settings" text="Back" force />
                  <h3 className="text-dark2 text-xl lg:pr-32 font-medium">
                    Notification Settings
                  </h3>
                </div>
                <Link href="/admin/settings/notifications/add">
                  <button
                    type="button"
                    className="transition text-lg text-white w-36 lg:w-48 h-9 rounded-full bg-primary hover:opacity-40 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none shadow-md"
                  >
                    + New Notification
                  </button>
                </Link>
              </div>
              <div className="border-primary border-b-2" />
            </div>
          </div>
          <div className="h-30px flex justify-between items-center">
            <div className="text-dark2 text-lg font-medium">Notifications</div>
            <div className="flex items-center gap-4">
              <span>Hide OFF</span>
              <Switch
                onChange={check => setHideOff(check ? 1 : 0)}
                checked={hideOff}
                checkedIcon={null}
                uncheckedIcon={null}
                offColor="#bbb"
                onColor="#ff474e"
                height={18}
                width={40}
              />
            </div>
          </div>
          <div className="flex flex-col h-100%-100px">
            <NotificationsTable hideOff={hideOff} onChangeValue={getIds} />
          </div>
        </div>
        <div className="bg-transparent h-2/5 xl:pt-2 2xl:pt-5">
          <div className="w-full h-40px flex flex-col justify-end">
            <div className="flex justify-between items-center pb-3">
              <h3 className="text-dark2 text-xl lg:pr-32 font-medium">
                View Activity Logs
              </h3>
            </div>
            <div className="border-primary border-b-2" />
          </div>
          <div className="flex flex-col h-100%-40px">
            <ViewLogsTable idList={idList} />
          </div>
        </div>
      </Card>
    </LayoutDashboard>
  );
};

export default LoadingScreen(NotificationSystem, 'final-admin');