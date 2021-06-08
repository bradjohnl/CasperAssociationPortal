import { ActiveLink, Card } from '../partials';
import AppHeader from '../layouts/app-header';

const Navigation = () => (
  <>
    <Card className="flex-col w-24 px-5 hidden lg:flex h-full">
      <img
        className="py-6 border-b-2 border-primary align-center"
        src="/images/ic_logo_home.svg"
        alt="Casper"
      />
      <ul className="flex flex-col items-center">
        <li className="pb-4 pt-14">
          <ActiveLink activeClassName="shadow-activeLink" href="/dashboard">
            <a className="rounded-lg inline-block">
              <img className="p-3" src="/images/ic_home.svg" alt="Home" />
            </a>
          </ActiveLink>
        </li>
        <li className="py-4">
          <ActiveLink
            activeClassName="shadow-activeLink"
            href="/dashboard/nodes"
          >
            <a className="inline-block rounded-2xl hover:shadow-lg">
              <img
                className="p-3"
                src="/images/ic_infor.svg"
                alt="Validator Info"
              />
            </a>
          </ActiveLink>
        </li>
        <li className="py-4">
          <ActiveLink
            activeClassName="shadow-activeLink"
            href="/dashboard/discussion"
          >
            <a className="rounded-lg inline-block">
              <img
                className="p-3"
                src="/images/ic_material_chat.svg"
                alt="Material Chat"
              />
            </a>
          </ActiveLink>
        </li>
        <li className="py-4">
          <ActiveLink
            activeClassName="shadow-activeLink"
            href="/dashboard/votes"
          >
            <a className="inline-block rounded-2xl hover:shadow-lg">
              <img
                className="p-3"
                src="/images/ic_awesome_vote.svg"
                alt="Vote"
              />
            </a>
          </ActiveLink>
        </li>
        <li className="py-4">
          <ActiveLink
            activeClassName="shadow-activeLink"
            href="/dashboard/member-perks"
          >
            <a className="inline-block rounded-2xl hover:shadow-lg">
              <img
                className="p-3"
                src="/images/ic_feather_user_plus.svg"
                alt="User Add"
              />
            </a>
          </ActiveLink>
        </li>
        <li className="pt-4">
          <ActiveLink
            activeClassName="shadow-activeLink"
            href="/dashboard/settings"
          >
            <a className="inline-block rounded-2xl hover:shadow-lg">
              <img
                className="p-3"
                src="/images/ic_feather_settings.svg"
                alt="Setting"
              />
            </a>
          </ActiveLink>
        </li>
      </ul>
    </Card>
    <AppHeader className="py-4 lg:hidden" theme="dark" />
  </>
);

export default Navigation;