import { useRef } from "react";
import { applyEffect } from "@/functions/board-effect";

export const useBoardEffect = () => {
  const board = useRef(null);

  const references = () => ({
    board: board.current.getBoundingClientRect(),
    card: board.current.children[0].style,
  });

  const getEvent = (e) => {
    const props = {
      offsetX: e.nativeEvent.offsetX,
      offsetY: e.nativeEvent.offsetY,
      ...references(),
    };

    applyEffect(props);
  };

  const getTouchEvent = (e) => {
    const touch = e.touches[0];
    const props = {
      offsetX: touch.clientX,
      offsetY: touch.clientY,
      ...references(),
    };

    applyEffect(props);
  };

  return {
    methods: {
      getTouchEvent: getTouchEvent,
      getEvent: getEvent,
    },
    object: references,
    ref: board,
  };
};

