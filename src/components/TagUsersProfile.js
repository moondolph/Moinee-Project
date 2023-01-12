import { useEffect, useState } from "react";

const TagUsersProfile = ({user}) => {


  console.log(user.thumbnail)
  return (
      <div className="container profile-size">
        <div className="mb-3">
          <div className="mt-3" style={{width : '180px'}}>
            <img
              className="rounded-circle"
              alt="profile"
              src={`https://storage.googleapis.com/${user.thumbnail}`}
              width="100px"
              height="100px"
            />
          </div>
          <div style={{width : '180px'}}>
            {user.userId}
          </div>
        </div>
        {/* <div className="container">
          <table>
            <tr>
              <th>Email :</th>
              <td>xxxxxx@gmail.com</td>
            </tr>
            <tr>
              <th>Phone :</th>
              <td>xxx-xxxx-xxxx</td>
            </tr>
            <tr>
              <th>Name :</th>
              <td>SungHwan</td>
            </tr>
          </table>
        </div> */}
      </div>
    
  );
};

export default TagUsersProfile;
