import React, {useState, useRef} from 'react';
import {Text, View, StyleSheet, FlatList, Animated} from 'react-native';

import {OnboardingItem} from '../components/OnboardingItem';
import slides from '../components/Slides';

export const Onboarding = () => {
  const [currentIndex, SetCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({viewableItems}: any) => {
    SetCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  return (
    <View style={styles.container}>
      <View style={{flex: 3}}>
        <FlatList
          data={slides}
          renderItem={({item}) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id.toString()}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
