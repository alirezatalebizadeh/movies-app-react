import React from "react";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img
          src={
            Poster !== "N/A"
              ? Poster
              : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEXMzMySkpLPz8/Ly8vFxcWVlZWZmZnIyMiampqmpqaenp7ExMS8vLzAwMCfn5+jo6Otra21tbWxsbFr92FIAAACqElEQVR4nO3X3XKbMBCGYVa/gAAB93+x3ZU8ieOmbnISk5n3OQmlm4w+L1rkYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACuxLnbD/d2w/277L91l+OObbeFlprq2lYcprQtf6091xrsZ9ne6vQ3/q67oFEmXaafJcVU9N/OruL6UOVOSZYwj5L61dDqyo+v99uWGC3hIVuZZNcbq8zrLtNjXYpjsI5LDVWs64vM5ZO6y3FbS+gmOZxma83aXZYxfyw7Yk9YtU6z6W/scroio3/Rwr9sldOeUl9ldTmK3rGsQxR7EIMuP7eoft6TPZt+jqsrUbSHVRbno+Tnf//1pnmxhHmWMuRk69WV2+bUjVjiPvhtswyLlJYwjzEMIYnX/9ASn+TqGzHIsd4SBpsipa9cp4jGDLPsVSZ7DuvooiUMY8yWMPfPROfT40i6GN1MvvdwtEVb5/qiW8Ihb7ENn2GNR09YkiUc7eP4HQlzmlxLGD5NqLtTx4l+EFMKHxOWt4TLqzM8pXNzdet9D8t9wrzJtMnubUM6F228hl/WQ1djnbaYzs/34aqTJs9zttfDNMVYLVyfNG0fasPHyydMSl+Ilutulrqhz8iiQybos7n0smSdi8WVJO0JbrM0vDrEc977oe3DlitI1Hu7vQ8lhse6fqbb2vswOntvLnoyiJd/Hw590rQTyiK1ncsmO908rrxPmnb20ZOb62efRbbLn2mGWw9XScds3RuyXtX+krjXE2p1OsZWV/Rqk/MFK/6uxTpiD53IbA1xe5THY6nd7t8ovNXV1rhdr65/LFX56ONwOY9brPere8vS0vjjPPyzugt7/8b+/Lv7V+sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAn/YH3pYU0+yf9hcAAAAASUVORK5CYII="
          }
          alt={Title}
        />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
