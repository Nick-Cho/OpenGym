import { useContext} from "react";
import {Avatar, List} from "antd";
import moment from "moment";
import {useRouter} from "next/router";
import {UserContext} from '../../context/index';
import {imageSource, UserOutlined} from '../../functions'
import Link from "next/link"

function SuggestedFollowers({people, handleFollow, handleUnfollow}) {
  const [state] = useContext(UserContext);
  const router = useRouter();

  return (
    <div>
      <List itemLayout="horizontal" dataSource = {people} renderItem={(user) => (
        <List.Item>
          <List.Item.Meta 
          avatar = {<Avatar src ={imageSource(user)}/>}
          title = {
          <div className = "d-flex justify-content-between">
            <Link href={`/user/${user.username}`}>
              <a className = "text-light">
                {user.first_name}
              </a>
            </Link>
            {state && state.user && user.followers && user.followers.includes(state.user._id) ? (
            <span onClick={() => handleUnfollow(user)} style = {{cursor: "pointer", color: "#269bc6"}}>
              Unfollow
            </span>
            ) : (
            <span onClick={() => handleFollow(user)} style = {{cursor: "pointer", color: "#269bc6"}}>
              Follow
            </span>
            )}
          </div>
          }
          />
        </List.Item>
      )}/> 
    </div>
  )
}

export default SuggestedFollowers;
