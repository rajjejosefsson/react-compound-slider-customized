import React, { Fragment } from "react";
import Slider from "react-compound-slider";

import { Handle } from "../components/handle";
import { Track } from "../components/track";
import { Tick } from "../components/tick";

import { styles } from "../defaultStyle";

export const RangeSlider = ({
  tickCount = 0,
  startValue = 0,
  endValue = 500,
  handleStartValue = 100,
  handleEndValue = 400
}) => (
  <Slider
    mode={1}
    step={1}
    domain={[startValue, endValue]}
    rootStyle={styles.slider}
    values={[handleStartValue, handleEndValue]}
  >
    <Slider.Rail>
      {({ getRailProps }) => <div style={styles.rail} {...getRailProps()} />}
    </Slider.Rail>

    <Slider.Handles>
      {({ handles, getHandleProps }) => (
        <div className="slider-handles">
          {handles.map(handle => (
            <Handle
              key={handle.id}
              handle={handle}
              domain={[100, 500]}
              getHandleProps={getHandleProps}
            />
          ))}
        </div>
      )}
    </Slider.Handles>

    <Slider.Tracks left={false} right={false}>
      {({ tracks, getTrackProps }) => (
        <div>
          {tracks.map(({ id, source, target }) => (
            <Track
              key={id}
              source={source}
              target={target}
              getTrackProps={getTrackProps}
            />
          ))}
        </div>
      )}
    </Slider.Tracks>

    {tickCount !== 0 ? (
      <Slider.Ticks count={tickCount}>
        {({ ticks }) => (
          <div>
            {ticks.map(tick => (
              <Tick key={tick.id} tick={tick} count={ticks.length} />
            ))}
          </div>
        )}
      </Slider.Ticks>
    ) : (
      <div />
    )}
  </Slider>
);
