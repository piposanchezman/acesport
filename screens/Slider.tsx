import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  View,
  ViewToken,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {useAuth0} from 'react-native-auth0';
import Slides from '../data/Slides';
import SlideItem from '../components/SlideItems';
import Pagination from '../components/Pagination';

const Slider = () => {
  const {authorize} = useAuth0();
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList | null>(null);

  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      setIndex(viewableItems[0]?.index ?? 0);
      if (viewableItems.length > 0) {
        const lastVisibleItemIndex =
          viewableItems[viewableItems.length - 1].index;
        if (lastVisibleItemIndex === Slides.length - 1) {
          // Llegaste al último ítem
          OnLogin();
        }
      }
    },
  ).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const OnLogin = async () => {
    try {
      await authorize();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <FlatList
        ref={ref => (flatListRef.current = ref)}
        data={Slides}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={Slides} scrollX={scrollX} index={index} />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({});
