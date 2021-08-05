import React, { useContext } from "react";
import { Image, Transformation } from "cloudinary-react";
import "./LeaderBoard.css";
import testImg from "../../assets/generic-avatar-1.jpeg";
import AppContext from "../../AppContext";

function LeaderBoard() {
  const { wallets } = useContext(AppContext);

  return (
    <div className="container">
      <div className="leaderboard">
        <div className="head">
          <i className="fas fa-crown"></i>
          <h1>Lifetime Leaderboard</h1>
        </div>
        <div className="body">
          <ol>
            {wallets
              .sort((a, b) => a.total - b.total)
              .map((wallet, indx) => (
                <li key={indx}>
                  {wallet.userUrl !== null ? (
                    <Image
                      cloudName="hotialrup"
                      className="leader-avatar"
                      publicId={`${wallet.userUrl}`}
                      alt={`${wallet.username}`}
                    >
                      <Transformation
                        gravity="face"
                        height="300"
                        width="300"
                        crop="crop"
                      />
                      <Transformation radius="max" />
                      <Transformation width="100" crop="scale" />
                    </Image>
                  ) : null}
                  <mark>{wallet.username}</mark>
                  <small>{wallet.total}</small>
                </li>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
