import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';

// Danh sách mẫu nhà hàng
const restaurantList = ["Pizza Hut", "KFC", "McDonald's", "Sushi Express", "BBQ House"];

const TableReservation = () => {
  const [restaurant, setRestaurant] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [people, setPeople] = useState('');
  const [time, setTime] = useState('');
  const [loading, setLoading] = useState(false);

  // Hàm tìm kiếm nhà hàng
  const handleSearch = (text) => {
    setRestaurant(text);
    if (text) {
      const filtered = restaurantList.filter((item) =>
        item.toLowerCase().includes(text.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  // Hàm đặt bàn
  const handleReserve = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log(`Reservation confirmed:
        Restaurant: ${restaurant}
        People: ${people}
        Time: ${time}`);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reserve a Table</Text>

      {/* Autocomplete cho tên nhà hàng */}
      <TextInput
        style={styles.input}
        placeholder="Search Restaurant"
        value={restaurant}
        onChangeText={handleSearch}
      />
      {suggestions.length > 0 && (
        <FlatList
          data={suggestions}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => { setRestaurant(item); setSuggestions([]); }}>
              <Text style={styles.suggestion}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      {/* Nhập số lượng người */}
      <TextInput
        style={styles.input}
        placeholder="Number of People"
        keyboardType="numeric"
        value={people}
        onChangeText={setPeople}
      />

      {/* Nhập thời gian đặt bàn */}
      <TextInput
        style={styles.input}
        placeholder="Reservation Time"
        value={time}
        onChangeText={setTime}
      />

      {/* Hiển thị ActivityIndicator khi tải */}
      {loading && <ActivityIndicator size="large" color="#007BFF" />}

      {/* Nút đặt bàn */}
      <TouchableOpacity style={styles.button} onPress={handleReserve} disabled={loading}>
        <Text style={styles.buttonText}>Reserve Table</Text>
      </TouchableOpacity>
    </View>
  );
};

// StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  suggestion: {
    padding: 10,
    backgroundColor: '#EFEFEF',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TableReservation;
