import React from 'react';

class SearchBox extends React.Component{
  constructor(props){
    super(props);
  }
  render(){

      const { array } = this.props;
      if (array.length <= 0){
        return null;
      }
      let attr = "name";
      if (Object.keys(Object.values(array)[0]).includes('username')){
        attr = "username"
      }
      let sortedItems = [...array];
      sortedItems.sort( (a, b) => {
          return a[attr].length - b[attr].length;
        })

      sortedItems = sortedItems.map(item => {
        return(
              <div onClick={this.props.action(item[attr])} key={item.id} className="search-box-item">
                {item[attr]}
              </div>
        )
      })
      return(
          <div className="search-box-container">
            {sortedItems}
          </div>
      )
  }
}

export default SearchBox;
