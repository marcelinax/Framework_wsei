import React, { FC } from "react";

import ProfileTableInput from "./ProfileTableInput";

interface Props {
  editing: boolean;
}

const ProfileAmountOfFees: FC<Props> = ({ editing }) => {
  return (
    <div className="profile-amount-of-fees">
      <h4>Amount of fees</h4>
      <table>
        <tr>
          <th>Year</th>
          <th>Cost center</th>
          <th>Total amount</th>
          <th>Law firm</th>
        </tr>
        <tr>
          <td>
            <ProfileTableInput
              defaultValue="2019"
              isEdit={editing}
            ></ProfileTableInput>
          </td>
          <td>
            <ProfileTableInput
              defaultValue="CS 153"
              isEdit={editing}
            ></ProfileTableInput>
          </td>
          <td>
            <ProfileTableInput
              defaultValue="3 500€"
              isEdit={editing}
            ></ProfileTableInput>
          </td>
          <td>
            <ProfileTableInput
              defaultValue="Clifford chance"
              isEdit={editing}
            ></ProfileTableInput>
          </td>
        </tr>
        <tr>
          <td>
            <ProfileTableInput
              defaultValue="2018"
              isEdit={editing}
            ></ProfileTableInput>
          </td>
          <td>
            <ProfileTableInput
              defaultValue="CS 153"
              isEdit={editing}
            ></ProfileTableInput>
          </td>
          <td>
            <ProfileTableInput
              defaultValue="9 500€"
              isEdit={editing}
            ></ProfileTableInput>
          </td>
          <td>
            <ProfileTableInput
              defaultValue="Linklaters"
              isEdit={editing}
            ></ProfileTableInput>
          </td>
        </tr>
        <tr>
          <td>
            <ProfileTableInput
              defaultValue="2017"
              isEdit={editing}
            ></ProfileTableInput>
          </td>
          <td>
            <ProfileTableInput
              defaultValue="CS 47"
              isEdit={editing}
            ></ProfileTableInput>
          </td>
          <td>
            <ProfileTableInput
              defaultValue="10 500€"
              isEdit={editing}
            ></ProfileTableInput>
          </td>
          <td>
            <ProfileTableInput
              defaultValue="Linklaters"
              isEdit={editing}
            ></ProfileTableInput>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <ProfileTableInput
              defaultValue=" CS 153"
              isEdit={editing}
            ></ProfileTableInput>
          </td>
          <td>
            <ProfileTableInput
              defaultValue=" 18 500€"
              isEdit={editing}
            ></ProfileTableInput>
          </td>
          <td>
            <ProfileTableInput
              defaultValue="Linklaters"
              isEdit={editing}
            ></ProfileTableInput>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <ProfileTableInput
              defaultValue="CS 32"
              isEdit={editing}
            ></ProfileTableInput>
          </td>
          <td>
            <ProfileTableInput
              defaultValue=" 15 500€"
              isEdit={editing}
            ></ProfileTableInput>
          </td>
          <td>
            <ProfileTableInput
              defaultValue="Linklaters"
              isEdit={editing}
            ></ProfileTableInput>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ProfileAmountOfFees;
