import React from 'react';
import {SvgXml} from 'react-native-svg';

const SvgContainer = ({
  height,
  width,
  size,
  svg,
  left,
  right,
  paddingHorizontal,
  _style,
}) => {
  return (
    <>
      {svg && (
        <SvgXml
          style={{
            paddingHorizontal: paddingHorizontal ?? 0,
            marginLeft: left ?? 0,
            marginRight: right ?? 0,
            ..._style,
          }}
          width={width ?? size}
          height={height ?? size}
          xml={`${svg}`}
        />
      )}
    </>
  );
};

export default SvgContainer;
