import React from "react";
import { Slider, Rail, Handles, Tracks } from "react-compound-slider";
import { Handle, Track, Tick } from "../components"; // example render components
import { styles } from "../defaultStyle";

export const SingleSlider = ({
  tickCount = 0,
  startValue = 0,
  endValue = 500,
  handleStartValue = 0
}) => (
  <Slider
    mode={1}
    step={1}
    domain={[startValue, endValue]}
    rootStyle={styles.slider}
    values={[handleStartValue]}
  >
    <Rail>
      {({ getRailProps }) => <div style={styles.rail} {...getRailProps()} />}
    </Rail>
    <Handles>
      {({ handles, getHandleProps }) => (
        <div className="slider-handles">
          {handles.map(handle => (
            <Handle
              key={handle.id}
              handle={handle}
              domain={[startValue, endValue]}
              getHandleProps={getHandleProps}
            />
          ))}
        </div>
      )}
    </Handles>
    <Tracks right={false}>
      {({ tracks, getTrackProps }) => (
        <div className="slider-tracks">
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
    </Tracks>
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
