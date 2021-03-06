import React, { Component } from "react";
import { Link } from "./Link";
import { Query } from "react-apollo";
import gql from "graphql-tag";

class LinkList extends Component {
  render() {
    const FEED_QUERY = gql`
      {
        feed {
          links {
            id
            createdAt
            url
            description
          }
        }
      }
    `;

    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error {console.log(error)}</div>;
          const linksToRender = data.feed.links;

          return (
            <div>
              <ol>
                {linksToRender.map(link => <Link key={link.id} link={link} />)}
              </ol>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default LinkList;
