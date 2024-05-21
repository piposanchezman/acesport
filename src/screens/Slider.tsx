import {
  Animated,
  FlatList,
  StyleSheet,
  View,
  ViewToken,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { useAuth0 } from "react-native-auth0";
import React, { useRef, useState } from "react";
import Slides from "../data/Slides";
import SlideItem from "../components/SlideItems";
import Pagination from "../components/Pagination";

const Slider = () => {
  const { authorize } = useAuth0();
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
      }
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        setIndex(viewableItems[0]?.index ?? 0);
        const lastVisibleItemIndex = viewableItems[viewableItems.length - 1].index;
        if (lastVisibleItemIndex === Slides.length - 1) {
          authorize({
            audience: "http://localhost:5000/",
            scope: "read:current_user, update:current_user_metadata",
          });
        }
      }
    }
  ).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View>
      <FlatList
        ref={(ref) => (flatListRef.current = ref)}
        data={Slides}
        renderItem={({ item }) => <SlideItem item={item} />}
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
