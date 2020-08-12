import React from "react";

const Header = (props) => {
  const {auth, onSignInClick} = props;

  return (
  <>
          <header className="page-header movie-card__head">
            <div className="logo">
              <a className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              {auth.isAuth
                ? (
                  <div className="user-block__avatar">
                    <img
                      src={auth.avatar}
                      alt="User avatar"
                      width="63" height="63"
                    />
                  </div>
                ) : (
                  <a
                    onClick={onSignInClick}
                    href="#"
                    className="user-block__link"
                  >
                      Sign in
                  </a>
                )
              }
            </div>
          </header>
  </>
  );
};

export default Header;
