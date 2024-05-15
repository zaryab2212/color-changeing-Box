import React, { useEffect, useState } from "react";
import { boxes } from "./components/Box";
import "./App.css";

const App = () => {
  const [isclicked, setisClicked] = useState(false);
  const [allBox, setAllBox] = useState(boxes);

  const [sequance, setSequance] = useState([]);

  const handleClick = (e, box, i) => {
    if (!box.color) setSequance([...sequance, i]);

    let newbox = allBox.map((b, i) => {
      if (b.id === box.id) {
        return { id: b.id, color: !b.color };
      }
      return b;
    });

    setAllBox(newbox);
  };

  useEffect(() => {
    const filterdArr = [];
    allBox.forEach((f) => {
      if (f.color) return filterdArr.push(f);
    });

    let everyfunc = allBox.every((e) => {
      return e.color;
    });

    const updateItems = (e, index) => {
      setTimeout(() => {
        console.log(sequance);
        setSequance((seq) => seq?.slice(0, seq.length - 1));
      }, 1000 * index); // Delay each update by 1 second multiplied by the index
      setAllBox(boxes);
    };
    if (everyfunc) {
      allBox.forEach((e, i) => {
        updateItems(e, i);
      });
    }
  }, [allBox]);

  //    if (everyfunc) {
  //     setSequance(true)
  //      setAllBox(() => filterdArr);

  //       filterdArr.forEach((f) => {
  //         setTimeout(() => {
  //           setAllBox((prevItems) => {
  //             const newItems = [...prevItems];
  //             f.color = false;
  //             return newItems;
  //           });
  //         }, 1000); // Delay each update by 1 second multiplied by the index
  //       });
  //    }

  return (
    <div className="main">
      {allBox?.map((box, i) => (
        <div
          style={{
            ...(sequance?.includes(i) && { backgroundColor: "red" }),
          }}
          className="box"
          onClick={(e) => handleClick(e, box, i)}
        >
          {""}
        </div>
      ))}
    </div>
  );
};

export default App;
