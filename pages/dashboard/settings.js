/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
import Link from 'next/link';
import { useContext, useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingScreen } from '../../components/hoc/loading-screen';
import LayoutDashboard from '../../components/layouts/layout-dashboard';
import { Button, Card, ToggleButton } from '../../components/partials';
import { useDialog } from '../../components/partials/dialog';
import {
  checkPassword,
  updateUserSettings,
} from '../../shared/redux-saga/dashboard/dashboard-actions';
import { AppContext } from '../_app';
import {
  USERNAME_PATTERN,
  EMAIL_PATTERN,
  PASSWORD_PATTERN,
} from '../../helpers/form-validation';
import { updateUser } from '../../shared/redux-saga/auth/actions';

const VerifyPasswordDialog = ({ checkUserPassword, guardFor }) => {
  const { onClosed } = useDialog();
  const [password, setPassword] = useState();

  return (
    <div className="py-16 text-center w-96 mx-auto">
      <h3 className="capitalize text-xl text-center mb-2.5">
        Please verify your current password first
      </h3>
      <input
        value={password}
        type="password"
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full h-14 px-7 my-10 rounded-full shadow-activeLink focus:outline-none"
      />
      <div className="flex gap-2.5 flex-col items-center">
        <Button
          primary
          onClick={() => {
            checkUserPassword(password, guardFor);
          }}
          size="large"
          disabled={!password}
          className="w-full"
        >
          Submit
        </Button>
        <Button
          primaryOutline
          onClick={() => {
            onClosed();
          }}
          size="large"
          className="w-full"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

const DEFAULT_INPUTS = {
  email: false,
  password: false,
  username: false,
  twoFA_login: false,
};

const DashboardSetting = () => {
  const { setDialog, onClosed } = useDialog();
  const [enableInput, setEnableInput] = useState(DEFAULT_INPUTS);
  const $submitRef = useRef(null);
  const dispatch = useDispatch();
  const { setLoading } = useContext(AppContext);
  const user = useSelector(state => state.authReducer.userInfo);
  const [isSaving, setIsSaving] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState,
    setValue,
    getValues,
    watch,
  } = useForm();

  const watchFA = watch('twoFA_login', false);

  const toggle = field => {
    if (!enableInput[field]) {
      setEnableInput({
        ...DEFAULT_INPUTS,
        [field]: true,
      });
    } else {
      setEnableInput({
        ...DEFAULT_INPUTS,
      });
      setValue(field, user[field]);
    }
  };

  const checkUserPassword = (currentPassword, field) => {
    setLoading(true);
    dispatch(
      checkPassword(
        { current_password: currentPassword },
        res => {
          setLoading(false);
          enableInput[field] = false;
          toggle(field);
          onClosed();
        },
        err => {
          setLoading(false);
        }
      )
    );
  };

  const toggleInput = field => {
    if (['password', 'email'].includes(field) && !enableInput[field]) {
      setDialog({
        type: 'DialogCustom',
        data: {
          content: (
            <VerifyPasswordDialog
              checkUserPassword={checkUserPassword}
              guardFor={field}
            />
          ),
        },
      });
    } else {
      toggle(field);
    }
  };

  const canSubmit = () => Object.values(enableInput).some(item => item);

  const onSubmit = data => {
    setIsSaving(true);
    setEnableInput({
      ...DEFAULT_INPUTS,
    });
    setValue('password', null);
    setValue('confirm_password', null);
    dispatch(
      updateUserSettings(
        data,
        res => {
          setIsSaving(false);
          dispatch(
            updateUser({
              fullInfo: {
                ...user.fullInfo,
                ...res,
              },
            })
          );
        },
        () => {
          setIsSaving(false);
          dispatch(
            updateUser({
              fullInfo: {
                ...user.fullInfo,
              },
            })
          );
        }
      )
    );
  };

  useEffect(() => {
    reset({
      email: user.fullInfo?.new_email || user.fullInfo?.email,
      twoFA_login: `${user.fullInfo?.twoFA_login}`,
      username: user.fullInfo?.username,
    });
  }, [user]);

  useEffect(() => {
    if (
      watchFA !== false &&
      +user.fullInfo.twoFA_login !== +watchFA &&
      !enableInput.twoFA_login
    ) {
      toggle('twoFA_login');
    }
  }, [watchFA]);

  const EditButton = ({ mobile, field }) => {
    const isDisabled = canSubmit();
    return (
      <button
        type="button"
        className={`${
          mobile ? 'inline lg:hidden' : 'pl-6 hidden lg:inline'
        } text-primary focus:outline-none disabled:opacity-40`}
        onClick={() => toggleInput(field)}
        disabled={!enableInput[field] && isDisabled}
      >
        {!enableInput[field] ? 'Edit' : 'Cancel'}
      </button>
    );
  };

  return (
    <LayoutDashboard>
      <Card className="h-full lg:pl-24 lg:py-11 lg:shadow-2xl" noShadow>
        <div className="w-full h-full">
          <div className="card-header lg:mr-24 lg:h-70px">
            <div className="flex justify-between items-end mb-3.5">
              <div className="flex items-center">
                <h3 className="mr-24 text-dark2 text-xl font-medium">
                  <Link href="/dashboard/settings">
                    <a>User Settings</a>
                  </Link>
                </h3>
                <h3 className="text-gray text-xl font-medium">
                  <Link href="/dashboard/profile">
                    <a>My profile</a>
                  </Link>
                </h3>
              </div>
              <div>
                <Button
                  primary
                  isLoading={isSaving}
                  sizeSpinner={20}
                  disabled={!canSubmit()}
                  onClick={() => $submitRef.current.click()}
                >
                  Save Changes
                </Button>
              </div>
            </div>
            <div className="border-primary border-b-2" />
          </div>
          <div className="card-body pt-8 pb-28 overflow-x-hidden overflow-y-auto lg:h-100%-70px -ml-1 pl-1">
            <div className="lg:pr-24">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col lg:flex-row">
                  <div className="w-full lg:w-1/2 pb-12">
                    <div className="form-group">
                      <div className="flex justify-between">
                        <label htmlFor="username">Username</label>
                        <EditButton mobile field="username" />
                      </div>
                      <div className="mt-5 flex items-center">
                        <input
                          name="username"
                          type="text"
                          disabled={!enableInput.username}
                          {...register(
                            'username',
                            enableInput.username
                              ? {
                                  required: 'User Name is required',
                                  pattern: {
                                    message: 'User Name is invalid',
                                    value: USERNAME_PATTERN,
                                  },
                                }
                              : {}
                          )}
                          className="w-full lg:w-3/4 lg:mt-0 h-14 px-7 rounded-full shadow-activeLink focus:outline-none disabled:text-gray"
                        />
                        <EditButton field="username" />
                      </div>
                      {enableInput.username && formState.errors?.username && (
                        <p className="px-7 pt-2 text-primary">
                          {formState.errors.username?.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 pb-12">
                    <div className="form-group">
                      <div className="flex justify-between">
                        <label htmlFor="email">
                          Email Address
                          {user.fullInfo?.new_email && (
                            <span className="text-primary"> (verifying)</span>
                          )}
                        </label>
                        <EditButton mobile field="email" />
                      </div>
                      <div className="mt-5 flex items-center">
                        <input
                          name="email"
                          type="text"
                          disabled={!enableInput.email}
                          {...register(
                            'email',
                            enableInput.email
                              ? {
                                  required: 'Email is required',
                                  pattern: {
                                    message: 'Email is invalid',
                                    value: EMAIL_PATTERN,
                                  },
                                }
                              : {}
                          )}
                          className="w-full lg:w-3/4 lg:mt-0 h-14 px-7 rounded-full shadow-activeLink focus:outline-none disabled:text-gray"
                        />
                        <EditButton field="email" />
                      </div>
                      {enableInput.email && formState.errors?.email && (
                        <p className="px-7 pt-2 text-primary">
                          {formState.errors.email?.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row">
                  <div className="w-full lg:w-1/2 pb-12">
                    <div className="form-group">
                      <div className="flex justify-between">
                        <label htmlFor="password">Update Password</label>
                        <EditButton mobile field="password" />
                      </div>
                      <div className="mt-5 flex items-center">
                        <input
                          disabled={!enableInput.password}
                          placeholder="New Password"
                          type="password"
                          {...register(
                            'password',
                            enableInput.password
                              ? {
                                  required: 'New Password is required',
                                  minLength: {
                                    message: 'Min 8 characters',
                                    value: 8,
                                  },
                                  pattern: {
                                    message: 'Password is invalid',
                                    value: PASSWORD_PATTERN,
                                  },
                                }
                              : {}
                          )}
                          className="w-full lg:w-3/4 lg:mt-0 h-14 px-7 rounded-full shadow-activeLink focus:outline-none"
                        />
                        <EditButton field="password" />
                      </div>
                      {enableInput.password && formState.errors?.password && (
                        <p className="px-7 pt-2 text-primary">
                          {formState.errors.password?.message}
                        </p>
                      )}
                      <div className="pt-8">
                        <input
                          placeholder="Confirm New Password"
                          type="password"
                          disabled={!enableInput.password}
                          {...register(
                            'confirm_password',
                            enableInput.password
                              ? {
                                  validate: value =>
                                    value === getValues().password ||
                                    'Password not match',
                                }
                              : {}
                          )}
                          className="w-full lg:w-3/4 mr-6 lg:mt-0 h-14 px-7 rounded-full shadow-activeLink focus:outline-none"
                        />
                      </div>
                      {enableInput.password &&
                        formState.errors?.confirm_password && (
                          <p className="px-7 pt-2 text-primary">
                            {formState.errors.confirm_password?.message}
                          </p>
                        )}
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 pb-12">
                    <div className="form-group">
                      <label htmlFor="2fa">2FA toggle</label>
                      <div className="hidden lg:block pl-5 mt-5">
                        <label className="relative pl-8 inline-flex items-center mr-6">
                          <input
                            type="radio"
                            className="text-primary"
                            value="1"
                            {...register('twoFA_login')}
                          />
                          <span className="text-sm text-dark1">ON</span>
                        </label>
                        <label className="relative pl-8 pt-6 flex">
                          <input
                            type="radio"
                            className="text-primary"
                            value="0"
                            {...register('twoFA_login')}
                          />
                          <span className="text-sm text-dark1">OFF</span>
                        </label>
                      </div>
                      <div className="block lg:hidden pl-5 mt-5">
                        <ToggleButton />
                      </div>
                    </div>
                  </div>
                </div>
                <button ref={$submitRef} type="submit" hidden />
              </form>
            </div>
          </div>
        </div>
      </Card>
    </LayoutDashboard>
  );
};

export default LoadingScreen(DashboardSetting, 'final-all');
