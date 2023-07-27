import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./popularjobcard.style";

const PopularJobCard = ({ item, selectedJobs, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJobs, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJobs, item)}>
        <Image
          source={{ uri: item.employer_logo }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
