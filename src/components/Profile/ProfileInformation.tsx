import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import InputAndText from "../InputAndText";
import { Link } from "react-router-dom";
import { RootState } from "../../store/rootStore";
import { User } from "../../types/User";
import UserAvatar from "../UserAvatar";
import { setLoggedUser } from "../../store/loggedUserStore";

const ProfileInformation: FC = () => {
  const user = useSelector<RootState, User>((store) => store.loggedUser);
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);

  return (
    <div className="profile-information">
      <button onClick={() => setEditing(!editing)}>EUIDASODIK</button>
      <div className="options"></div>
      <div className="profile-box">
        <div className="user">
          <UserAvatar height={80} width={80}></UserAvatar>
          <Link to="/your-profile">See profile</Link>
        </div>
        <div className="user-information">
          <div className="user-information-left">
            <InputAndText
              customClass="name"
              isEdit={editing}
              value={user.name}
              setValue={(value) =>
                dispatch(setLoggedUser({ ...user, name: value }))
              }
            />
            <InputAndText
              customClass="company"
              isEdit={editing}
              value={user.company.name}
              setValue={(value) =>
                dispatch(
                  setLoggedUser({
                    ...user,
                    company: { ...user.company, name: value },
                  })
                )
              }
            />
            <InputAndText
              customClass="city"
              isEdit={editing}
              value={user.address.city}
              setValue={(value) =>
                dispatch(
                  setLoggedUser({
                    ...user,
                    address: { ...user.address, city: value },
                  })
                )
              }
            />
            <InputAndText
              customClass="position"
              isEdit={editing}
              value={user.address.suite}
              setValue={(value) =>
                dispatch(
                  setLoggedUser({
                    ...user,
                    address: { ...user.address, suite: value },
                  })
                )
              }
            />
          </div>
          <div className="user-information-right">
            <InputAndText
              customClass="email"
              isEdit={editing}
              value={user.email}
              setValue={(value) =>
                dispatch(
                  setLoggedUser({
                    ...user,
                    email: value,
                  })
                )
              }
            />
            <InputAndText
              customClass="number-phone"
              isEdit={editing}
              value={user.phone}
              setValue={(value) =>
                dispatch(
                  setLoggedUser({
                    ...user,
                    phone: value,
                  })
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
