import React, { useState } from 'react'; // Nhập React và useState
import { View, Text, StyleSheet, ScrollView, RefreshControl, StatusBar } from 'react-native'; // Nhập các thành phần cần thiết từ React Native

const StatusBarRefresh = () => {
  const [refreshing, setRefreshing] = useState(false); // Trạng thái cho RefreshControl
  const [statusBarColor, setStatusBarColor] = useState('#000'); // Trạng thái cho màu StatusBar

  const onRefresh = () => {
    setRefreshing(true); // Bắt đầu refresh
    setTimeout(() => {
      setRefreshing(false); // Kết thúc refresh
      setStatusBarColor(prevColor => (prevColor === '#000' ? '#ff6347' : '#000')); // Đổi màu
    }, 2000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> // Kết nối RefreshControl
      }
      style={styles.container}
    >
      <StatusBar backgroundColor={statusBarColor} barStyle="light-content" /> {/* Thay đổi màu StatusBar */}
      <Text style={styles.header}>Kéo xuống để thay đổi màu StatusBar</Text>
      <Text style={styles.paragraph}>Nội dung ở đây...</Text>
    </ScrollView>
  );
};

// Các kiểu dáng cho thành phần
const styles = StyleSheet.create({
  container: {
    flex: 1, // Chiếm toàn bộ không gian
    padding: 20, // Khoảng cách bên trong cho container
  },
  header: {
    fontSize: 24, // Kích thước chữ cho tiêu đề
    marginBottom: 20, // Khoảng cách dưới cho tiêu đề
  },
  paragraph: {
    fontSize: 16, // Kích thước chữ cho đoạn văn
  },
});

// Xuất thành phần chính
export default StatusBarRefresh;
