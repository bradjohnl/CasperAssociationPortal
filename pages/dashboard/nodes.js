import { Card } from '../../components/partials';
import LayoutDashboard from '../../components/layouts/layout-dashboard';
import InfoRightNode from '../../components/dashboard/info-right-node';
import ContentNode from '../../components/dashboard/content-node';
import { LoadingScreen } from '../../components/hoc/loading-screen';
import { withPageRestricted } from '../../components/hoc/with-page-restricted';

const DashboardNode = () => (
  <LayoutDashboard>
    <div className="flex h:auto lg:h-full">
      <div className="w-4/5">
        <ContentNode />
      </div>
      <Card className="hidden lg:block h-full w-1/5">
        <div className="py-5 pl-5 h-full">
          <InfoRightNode />
        </div>
      </Card>
    </div>
  </LayoutDashboard>
);

export default LoadingScreen(
  withPageRestricted(DashboardNode, 'nodes'),
  'final-all'
);
