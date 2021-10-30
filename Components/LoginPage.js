import React, {useState} from 'react';
import {Text, Center, VStack, Input, Button} from 'native-base';

const LoginPage = () => {
  const [user, setUser] = useState({username: '', password: ''});
  const handleSubmit = () => {
    console.log(user);
  };
  return (
    <Center flex={1}>
      <VStack space={4} alignItems="center" w="80%">
        <Text>مكتبة الطليعة</Text>
        <Input
          mx="3"
          placeholder="اسم المستخدم"
          size="2xl"
          name="username"
          variant="rounded"
          onChangeText={text => setUser({...user, username: text})}
          isFullWidth={true}
        />
        <Input
          mx="3"
          placeholder="كلمة السر"
          size="2xl"
          variant="rounded"
          type="password"
          name="password"
          onChangeText={text => setUser({...user, password: text})}
          isFullWidth={true}
        />
        <Button
          w="100%"
          isDisabled={
            user.username === '' || user.password === '' ? true : false
          }
          onPress={handleSubmit}>
          تسجيل الدخول
        </Button>
        <Button w="100%" onPress={handleSubmit}>
          انشئ حساب
        </Button>
      </VStack>
    </Center>
  );
};

export default LoginPage;
