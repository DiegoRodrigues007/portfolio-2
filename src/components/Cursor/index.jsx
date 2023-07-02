import { useEffect, useRef } from "react";
import styles from "./Cursor.module.scss";

const Cursor = () => {
  const delay= 18;

  const dot = useRef(null);
  const dotOutline = useRef(null);

  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);


// if (typeof window !== 'undefined') {
  // código que depende do objeto window


  const endX =  useRef(window.innerWidth / 2 );
  const endY = useRef(window.innerHeight / 2 );
  const _x = useRef(0);
  const _y = useRef(0);

  const requestRef = useRef(null);

  useEffect(()=>{
    document.addEventListener('mousedown', mouseOverEvent);
    document.addEventListener('mouseup', mouseOutEvent);
    document.addEventListener('mousemove', mouseMoveEvent);
    document.addEventListener('mouseenter', mouseEnterEvent);
    document.addEventListener('mouseleave', mouseLeaveEvent);

    animateDotOutiline();
    return () =>{
        document.removeEventListener('mousedown', mouseOverEvent);
        document.removeEventListener('mouseup', mouseOutEvent);
        document.removeEventListener('mousemove', mouseMoveEvent);
        document.removeEventListener('mouseenter', mouseEnterEvent);
        document.removeEventListener('mouseleave', mouseLeaveEvent);

        cancelAnimationFrame(requestRef.current);
    }
  },[])

  const touggleCursorVisibility = () =>{
    if(cursorVisible.current){
        dot.current.style.opacity = 1;
        dotOutline.current.style.opacity = 1;
    }else{
        dot.current.style.opacity = 0;
        dotOutline.current.style.opacity = 0;
    }
  }

  const touggleCursorSize = ()=>{
    if(cursorEnlarged.current){
        dot.current.styles.transform = 'translate(-50%, -50%) scale(0.75)';
        dotOutline.current.styles.transform = 'translate(-50%, -50%) scale(1.5)';

    }else{
        dot.current.styles.transform = 'translate(-50%, -50%) scale(1)';
        dotOutline.current.styles.transform = 'translate(-50%, -50%) scale(1)';
    }
  }

  const mouseOverEvent = ()=>{
    cursorEnlarged.current = true;
    touggleCursorSize();
  }

  const mouseOutEvent=()=>{
    cursorEnlarged.current = false;
    touggleCursorSize();
  }

  const mouseOutiline = ()=>{
    cursorEnlarged.current = false;
    touggleCursorSize();
  }

  const mouseEnterEvent = ()=>{
    cursorVisible.current = true;
    touggleCursorVisibility();
  }

  const mouseLeaveEvent = ()=>{
    cursorVisible.current = false;
    touggleCursorVisibility();
  }

  const mouseMoveEvent = e =>{
    cursorVisible.current = true;
    touggleCursorVisibility();

    endX.current = e.pageX;
    endY.current = e.pageY;

    dot.current.styles.top = endY.current + 'px';
    dot.current.styles.left = endX.current + 'px';
  }

  const animateDotOutiline = ()=>{
    _x.current += (endX.current - _x.current) / delay;
    _y.current +=(endY.current - _y.current) / delay;

    dotOutline.current.styles.top = _y.current + 'px';
    dotOutline.current.styles.left = _x.current + 'px';
    
    requestRef.current = requestAnimationFrame(animateDotOutiline);
  }

  

  return (
    <>
      
        <div ref={dotOutline} className={styles.cursorDotOutline}></div>
        <div ref={dot} className={styles.cursorDot}></div>
        {/* <div className={styles.linksContainer}>
            {[...Array(4).keys()].map(i => (
                <Link
            ))}
        </div> */}
      
    </>
  );
};

export default Cursor;
