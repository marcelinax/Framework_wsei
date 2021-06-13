import React, { FC } from "react";

import ProfileTableInput from "./ProfileTableInput";

interface Props {
  editing: boolean;
}

const ProfileProposals: FC<Props> = ({ editing }) => {
  return (
    <div className="profile-proposals">
      <h4>Proposals</h4>
      <table>
        <tr>
          <th>Name</th>
          <th>Entity</th>
          <th>Location</th>
          <th>Expertise</th>
          <th>Date</th>
          <th>Firm</th>
        </tr>

        <tr>
          <td>
            <ProfileTableInput
              defaultValue="Opearaiotn Ti..."
              isEdit={editing}
            ></ProfileTableInput>
          </td>
          <td>
            <ProfileTableInput
              defaultValue="Renault Co..."
              isEdit={editing}
            ></ProfileTableInput>
          </td>
          <td>
            <ProfileTableInput
              defaultValue="France"
              isEdit={editing}
            ></ProfileTableInput>
          </td>
          <td>
            <ProfileTableInput
              defaultValue="#Tax"
              isEdit={editing}
            ></ProfileTableInput>
          </td>
          <td>
            <ProfileTableInput
              defaultValue="20/01/2018"
              isEdit={editing}
            ></ProfileTableInput>
          </td>
          <td>
            <ProfileTableInput
              defaultValue="Racine"
              isEdit={editing}
            ></ProfileTableInput>
          </td>
        </tr>
        <tr>
          <td>
            <ProfileTableInput
              defaultValue="Op. Prometh..."
              isEdit={editing}
            ></ProfileTableInput>
          </td>
          <td>
            <ProfileTableInput
              defaultValue="Renault HQ"
              isEdit={editing}
            ></ProfileTableInput>
          </td>
          <td>
            <ProfileTableInput
              defaultValue="USA"
              isEdit={editing}
            ></ProfileTableInput>
          </td>
          <td>
            <ProfileTableInput
              defaultValue="#M&A"
              isEdit={editing}
            ></ProfileTableInput>
          </td>
          <td>
            <ProfileTableInput
              defaultValue="18/02/2019"
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
              defaultValue="Op. Latandre"
              isEdit={editing}
            ></ProfileTableInput>
          </td>
          <td>
            <ProfileTableInput
              defaultValue="Renault Br..."
              isEdit={editing}
            ></ProfileTableInput>
          </td>
          <td>
            <ProfileTableInput
              defaultValue="Italia"
              isEdit={editing}
            ></ProfileTableInput>
          </td>
          <td>
            <ProfileTableInput
              defaultValue="#Social"
              isEdit={editing}
            ></ProfileTableInput>
          </td>
          <td>
            <ProfileTableInput
              defaultValue="18/02/2019"
              isEdit={editing}
            ></ProfileTableInput>
          </td>
          <td>
            <ProfileTableInput
              defaultValue="SVZ"
              isEdit={editing}
            ></ProfileTableInput>
          </td>
        </tr>
      </table>

      <a href="3" className="see-more">
        See more proposals
      </a>
    </div>
  );
};

export default ProfileProposals;
