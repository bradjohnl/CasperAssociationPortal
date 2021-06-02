import AppFooter from './app-footer';
import Navigation from '../dashboard/navigation';

export default function LayoutDashboard({ children }) {
  return (
    <div>
      <div className="dashboard-layout">
        <div className="min-h-screen h-px mx-auto max-w-404 px-4 lg:py-4 xl:py-16 2xl:py-24 flex flex-col">
          <div className="flex h-full flex-col md:flex-row">
            <Navigation />
            <div
              className="relative pt-12 md:pt-0 md:pl-6 dashboard-content flex-grow min-h-full"
              style={{ height: 'max-content' }}
            >
              <div>{children}</div>
              <div
                className="transform translate-y-full absolute py-8 bottom-0 right-0"
                style={{ height: 'max-content', left: '-80px' }}
              >
                <AppFooter theme="dark" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
