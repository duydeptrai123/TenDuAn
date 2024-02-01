import React, { useState } from "react";
import { Alert, Button, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { DELETE_ANTREO, addAntreo, deleteAntreo, updateAntreo } from "../redux/action/antreoAction";
import { useDispatch } from "react-redux";

const Detail = (item) => {
    // console.log('onnn', item?.route?.params);
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const [name1, setName1] = useState('');
    const [namsinh1, setNamsinh1] = useState('');
    const [quequan1, setQuequan1] = useState('');
    const [CCCD1, setCCCD1] = useState('');
    const [ngaycapCCCD1, setNgaycapCCCD1] = useState('');
    const [noicapCCCD1, setNoicapCCCD1] = useState('');
    const [toidanh1, setToidanh1] = useState('');
    const [sobanan1, setSobanan1] = useState('');
    const [ngaycapsobanan1, setNgaycapsobanan1] = useState('');
    const [toaan1, setToasan1] = useState('');
    const [QDtoaan1, setQDtoaan1] = useState('');
    const [anphat1, setAnphat1] = useState('');
    const [thuthach1, setThuthach1] = useState('');
    const [ngaybatdau1, setNgaybatdau1] = useState('');
    const [ngayketthuc1, setNgayketthuc1] = useState('');
    const [ngayraQD1, setNgayraQD1] = useState('');

    const DataItem = {
        // id : id,
        hovaten: name1.toString(),
        namsinh: namsinh1.toString(),
        quequan: quequan1.toString(),
        CCCD: CCCD1.toString(),
        ngaycapCCCD: ngaycapCCCD1.toString(),
        noicapCCCD: noicapCCCD1.toString(),
        toidanh: toidanh1.toString(),
        sobanan: sobanan1.toString(),
        ngaycapsobanan: ngaycapsobanan1.toString(),
        toaan: toaan1.toString(),
        QDtoaan: QDtoaan1.toString(),
        anphat: anphat1.toString(),
        thuthach: thuthach1.toString(),
        ngaybatdau: ngaybatdau1.toString(),
        ngayketthuc: ngayketthuc1.toString(),
        ngayraQD: ngayraQD1.toString(),
    }
    const Add = () => {
        // console.log('idd',id)

        Alert.alert(
            'Thông báo',
            'Bạn có chắc chắn muốn thêm không?',
            [
                {
                    text: 'Hủy',
                    onPress: () => {
                        // Bất kỳ công việc nào bạn muốn thực hiện khi nhấn "Cancel"
                    },
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => {
                        dispatch(addAntreo(DataItem))
                        navigation.navigate('Án treo')
                        // console.log('DataItem',DataItem)
                    },
                },
            ],
            { cancelable: false }
        );
    }

    return (
        <ScrollView style={{ flex: 1, marginRight:10}}>
        <View style={{ flexDirection: 'row', marginTop:20, marginLeft:20, marginBottom:20 }}>
            <View style={{ flex: 1 }}>
                <ImageBackground imageStyle={{ width: 100, height: 100, backgroundColor: 'pink' }} />
            </View>
            <View style={{ flex: 2 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text>Họ và tên: </Text>
                    <TextInput
                        style={{ width: '100%', borderColor:'gray', borderWidth:0.2, flex:1 }}
                        value={name1}
                        onChangeText={(text) => setName1(text)}>
                    </TextInput>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text>Năm sinh: </Text>
                    <TextInput
                        style={{ width: '100%',borderColor:'gray', borderWidth:0.2, flex:1  }}
                        onChangeText={(text) => setNamsinh1(text)}
                        value={namsinh1}>
                    </TextInput>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text>Quê quán: </Text>
                    <TextInput
                        style={{ width: '100%',borderColor:'gray', borderWidth:0.2, flex:1  }}
                        onChangeText={(text) => setQuequan1(text)}
                        value={quequan1}>
                    </TextInput>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text>CCCD: </Text>
                    <TextInput
                        style={{ width: '100%',borderColor:'gray', borderWidth:0.2, flex:1 }}
                        onChangeText={(text) => setCCCD1(text)}
                        value={CCCD1}>
                    </TextInput>
                </View>
            </View>
        </View>
        <View style={{ marginLeft: 20, flexDirection: 'row' }}>
            <Text>Ngày cấp CCCD: </Text>
            <TextInput style={{width: '100%', borderColor:'gray', borderWidth:0.2, flex:1 }}

                value={ngaycapCCCD1}
                onChangeText={(text) => setNgaycapCCCD1(text)}>
            </TextInput>
        </View>
        <View style={{ marginLeft: 20, flexDirection: 'row',marginTop: 10 }}>
            <Text>Nơi cấp: </Text>
            <TextInput style={{ width: '100%', borderColor:'gray', borderWidth:0.2, flex:1 }}
                value={noicapCCCD1}
                onChangeText={(text) => setNoicapCCCD1(text)}>
            </TextInput>
        </View>
        <View style={{ marginTop: 10, marginLeft: 20, flexDirection: 'row' }}>
            <Text>
                Tội danh: </Text>
            <TextInput
                style={{ width: '100%', borderColor:'gray', borderWidth:0.2, flex:1 }}
                value={toidanh1}
                onChangeText={(text) => setToidanh1(text)}>
            </TextInput>
        </View>

        <View style={{ marginLeft: 20, flexDirection: 'row', marginTop: 10 }}>
            <Text>Số bản án: </Text>
            <TextInput style={{ flex: 0.4, width: '100%', borderColor:'gray', borderWidth:0.2 }}
                value={sobanan1}
                onChangeText={(text) => setSobanan1(text)}>
            </TextInput>
            <Text> Ngày: </Text>
            <TextInput style={{ flex: 0.6, width: '100%', borderColor:'gray', borderWidth:0.2 }}
                value={ngaycapsobanan1}
                onChangeText={(text) => setNgaycapsobanan1(text)}>
            </TextInput>
        </View>
        <View style={{ marginTop: 10, marginLeft: 20, flexDirection: 'row' }}>
            <Text>Tòa án: </Text>
            <TextInput
                style={{  width: '100%', borderColor:'gray', borderWidth:0.2, flex:1 }}
                value={toaan1}
                onChangeText={(text) => setToasan1(text)}>
            </TextInput>
        </View>

        <View style={{ marginLeft: 20, flexDirection: 'row', marginTop: 10 }}>
            <Text>QĐ: </Text>
            <TextInput style={{ flex: 0.4,  width: '100%', borderColor:'gray', borderWidth:0.2 }}
                value={QDtoaan1}
                onChangeText={(text) => setQDtoaan1(text)}>
            </TextInput>
            <Text> Ngày: </Text>
            <TextInput style={{ flex: 0.6, width: '80%' }}
                value={ngayraQD1}
                onChangeText={(text) => setNgayraQD1(text)}>
            </TextInput>
        </View>
        <View style={{ marginTop: 10, marginLeft: 20, flexDirection: 'row' }}>
            <Text>Án phạt: </Text>
            <TextInput
                style={{ width: '100%', borderColor:'gray', borderWidth:0.2, flex:1 }}
                value={anphat1}
                onChangeText={(text) => setAnphat1(text)}>
            </TextInput>
        </View>
        <View style={{ marginTop: 10, marginLeft: 20, flexDirection: 'row' }}>
            <Text>Thử thách: </Text>
            <TextInput
                style={{  width: '100%', borderColor:'gray', borderWidth:0.2, flex:1 }}
                value={thuthach1}
                onChangeText={(text) => setThuthach1(text)}>
            </TextInput>
        </View>
        <View style={{ marginTop: 10, marginLeft: 20, flexDirection: 'row' }}>
            <Text>Ngày bắt đầu CHA: </Text>
            <TextInput
                style={{  width: '100%', borderColor:'gray', borderWidth:0.2, flex:1 }}
                value={ngaybatdau1}
                onChangeText={(text) => setNgaybatdau1(text)}>
            </TextInput>
        </View>
            <View style={{ marginTop: 10, marginLeft: 20, flexDirection: 'row' }}>
                <Text>Ngày kết thúc CHA: </Text>
                <TextInput
                    style={{ width: '80%' }}
                    value={ngayketthuc1}
                    onChangeText={(text) => setNgayketthuc1(text)}>
                </TextInput>
            </View>
            <View style={{ flexDirection: 'row', flex: 1 }}>
                <TouchableOpacity onPress={Add} style={{ flex: 1, height: 50, backgroundColor: 'pink', margin: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>
                        Thêm
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Detail;