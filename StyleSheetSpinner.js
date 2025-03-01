import React, { useState } from 'react'; // Nhập React và useState
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList, StyleSheet } from 'react-native'; // Nhập các thành phần cần thiết từ React Native
import Autocomplete from 'react-native-autocomplete-input'; // Nhập Autocomplete

const StyleSheetSpinner = () => {
    const [query, setQuery] = useState(''); // Trạng thái cho truy vấn tìm kiếm
    const [loading, setLoading] = useState(false); // Trạng thái loading
    const fruits = ['táo', 'chuối', 'cam', 'xoài', 'Quả dứa', 'Quả nho', 'Quả dâu', 'việt quất']; // Dữ liệu mẫu

    // Lọc dữ liệu dựa trên truy vấn
    const filteredFruits = query
        ? fruits.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
        : fruits;

    // Hàm xử lý tìm kiếm
    const handleSearch = (text) => {
        setLoading(true);
        setQuery(text);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fruit Selector</Text>

            {/* Autocomplete cho phép người dùng tìm kiếm */}
            <Autocomplete
                data={filteredFruits}
                defaultValue={query}
                onChangeText={handleSearch} // Cập nhật truy vấn khi người dùng nhập
                placeholder="Type a fruit..."
                flatListProps={{
                    keyExtractor: (item) => item,
                    renderItem: ({ item }) => (
                        <TouchableOpacity onPress={() => setQuery(item)}>
                            <Text style={styles.item}>{item}</Text> {/* Hiển thị danh sách gợi ý */}
                        </TouchableOpacity>
                    ),
                }}
            />

            {/* Hiển thị Spinner khi đang loading */}
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" style={styles.spinner} />
            ) : (
                <FlatList
                    data={filteredFruits}
                    keyExtractor={(item) => item} // Sử dụng tên trái cây làm key
                    renderItem={({ item }) => (
                        <View style={styles.gridItem}>
                            <Text>{item}</Text> {/* Hiển thị tên trái cây */}
                        </View>
                    )}
                    numColumns={2} // Hiển thị theo dạng lưới với 2 cột
                />
            )}
        </View>
    );
};

// Định nghĩa StyleSheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    item: {
        padding: 10,
        fontSize: 18,
    },
    spinner: {
        marginTop: 20,
    },
    gridItem: {
        flex: 1,
        margin: 10,
        padding: 20,
        backgroundColor: '#f9c2ff',
        alignItems: 'center',
    },
});

export default StyleSheetSpinner;
