import FilterButton from "@/components/index/FilterButton";
import FloatingActionButton from "@/components/index/FloatingActionButton";
import SearchBar from "@/components/index/SearchBar";
import TeamCard from "@/components/index/TeamCard";
import { FlatList, ListRenderItem, StyleSheet, View } from "react-native";

export default function Index() {
  const handleAddOrganization = () => {
    // TODO: Navigate to add organization screen or show modal
    console.log("Add new organization pressed");
  };

  const handleAddTeam = () => {
    // TODO: Navigate to add team screen or show modal
    console.log("Add new team pressed");
  };

  const renderTeam: ListRenderItem<any> = ({ item }) => (
    // <TeamCard team={item} onPress={onTeamPress} />
    <TeamCard team={item} />
  );
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* Search Bar and Filter Button */}
      <View style={styles.searchContainer}>
        <SearchBar />
        <FilterButton />
      </View>

      {/* Team List */}
      <FlatList data={[]} renderItem={renderTeam} />

      {/* Floating Action Button */}
      <FloatingActionButton
        onAddOrganization={handleAddOrganization}
        onAddTeam={handleAddTeam}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
});
