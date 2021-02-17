import React, { useEffect, useState } from "react";
import UserDetailsWrapper from "../../components/UserDetails";
import { useLocation } from "react-router-dom";
import { getUserDetails } from "../../api";
import UserNotFound from "../../components/UserDetails/UserNotFound";
import { Spinner } from "react-bootstrap";

const SAMPLE_USER = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496"
    }
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
  }
};

export default function UserDetailsContainer() {
  const [userDetails, setUserDetails] = useState(null);
  const [loader, setLoader] = useState(true);
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const userId = new URLSearchParams(location.search).get("id");
      if (userId) {
        const userData = await getUserDetails(userId);
        setLoader(false);
        if (userData) setUserDetails(userData);
      }
    })();
  }, []);

  if (userDetails) return <UserDetailsWrapper user={userDetails} />;
  if (loader)
    return (
      <div className="topSpacing">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  return <UserNotFound />;
}
