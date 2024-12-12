import React, {useEffect} from 'react';
import '../css/article.css'
import files from '../Shared/Ressources/files';
import { motion, useAnimation } from 'framer-motion';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Article({
  page,
  id = 0,
  isBig,
  onOpen,
  onClose,
  isExpert,
  ...props
}) {
  const jsonData = files.filesMap[page].default.data;
  const imgData = files.filesMap[page].default.images;
  const controls = useAnimation();
  const animationVariants = { // Définition des variants ici
    hidden: {
      opacity: 0,
      height: 0,
      margin:0,
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.2 },
      margin:" 0 0 .5rem"
    },
  };

  // ...

  const reducedData = []; // Définition de la variable ici
  for(let i = 0 ; i < jsonData.length; i++){
    const data = jsonData[i];
    if((data.type === 'title') && (data.data === 'Repair' || data.data === 'Solution')){
      break;
    }
    else{
      reducedData.push(data)
    }
  }

  const smallData = jsonData.filter((elem,id) => id === 0 || id === 2); // Définition de la variable ici

  useEffect(() => {
    if(isBig){
      controls.start("visible")
    }else{
      controls.start("hidden")
    }
  })

  const handleClose = () => {
    controls.start("hidden").then(() => {
      onClose();
    });
  };

  const AnimatedElement = ({
    Component,
    children,
    className,
    id,
    animate = true,
    style,
    ...props
  }) => {
    const Comp = motion[Component];
    return (
      <Comp
        className={className}
        key={id}
        style={{
          width:"100%",
          ...style
        }}
        {...(animate && { // Conditionally add motion props if id !== 0
          initial: isBig ? 'hidden' : 'hidden',
          animate: controls,
          exit: "exit",
          variants: animationVariants
        })}
        {...props}
      >
        {children}
      </Comp>
    );
  };

  const parseImg = (data,id) => {
    return (
      <motion.div
        key={id}
        className='image'
        initial="hidden"
        animate={controls}
        exit="exit"
        style={{
        }}
        variants={animationVariants}
      >
        <img
          key={id}
          src={imgData[data.data]}
        />
      </motion.div>
    );
  };

  const parseSwitch = (data,id,isDemo) => {
    const type = data.type;
    const innerData = data.data;
    switch (type) {
      case 'title':
        return <AnimatedElement
          Component={'h2'}
          className={'title'}
          animate={isDemo ? false : (id !== 0)}
        >
          {innerData.split('_').join(' ')}
        </AnimatedElement>
      case 'text':
        return <AnimatedElement
          Component={'p'}
          className={'text'}
          animate={isDemo ? false : (id !== 2)}
        >
          {data.data}
        </AnimatedElement>
      case 'list':
        return <AnimatedElement
          Component={'p'}
          className={'list'}
          style={{
            paddingLeft:data.indentation / 3,
          }}
        >
          {data.data}
        </AnimatedElement>
      case 'image':
        return parseImg(data);
      default:
        break;
    }
  };

  const parseAll = () => {
    if(isBig){
      let dataToUse = reducedData;
      if(isExpert){
        dataToUse = jsonData
      }
      return dataToUse.map((elem,id) => parseSwitch(elem,id,false));
    }
    return smallData.map((elem,id) => parseSwitch(elem,id,true));
  };

  const handleOutsideClick = (event) => {
    if (!event.target.classList.contains('article')) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    jsonData ? (
      <button
        className={`article reducedWidth ${isBig ? 'big' : 'small'} `}
        id={id}
        href={`#${id}`}
        key={id}
        onClick={onOpen}
        style={{
          flexDirection : jsonData[0].data.includes("REPAIR") ? "row" : 'column',
          flexWrap : jsonData[0].data.includes("REPAIR") ? "wrap" : 'nowrap'
        }}
        {...props}
      >
        {
          isBig &&
            <AnimatedElement
              Component={"button"}
              className={'close'}
              onClick={handleClose}
              style={{
                width:"auto"
              }}
            >
              <FontAwesomeIcon
                icon={faClose}
              />
            </AnimatedElement>
        }
        {
          parseAll()
        }
      </button>
    )
    :
    <div />
  );
}

export default React.memo(Article, (prevProps, nextProps) => {
  const prevKeys = Object.keys(prevProps);
  const nextKeys = Object.keys(nextProps);
  if (prevKeys.length !== nextKeys.length) {
    console.log('Props length changed:', { prevProps, nextProps });
    return false;
  }
  for (let key of prevKeys) {
    if ((key === 'onClose') || ( key === 'onOpen')) {
      continue; // Skip comparison for onClose if you are sure it doesn't change the behavior
    }
    else if (prevProps[key] !== nextProps[key]) {
      return false;
    }
  }
  return true;
});