import React, {useState} from 'react';
import {Text, Center, VStack, Input, Button} from 'native-base';

const SignupPage = () => {
  const [user, setUser] = useState({username: '', password: '', email: ''});

  const handleSubmit = () => {
    console.log(user);
  };
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

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
          isInvalid={user.password.length < 8 && user.password !== ''}
          name="password"
          onChangeText={text => setUser({...user, password: text})}
          isFullWidth={true}
        />
        {user.password.length < 8 && user.password !== '' && (
          <Text>كلمة السر يجب ان تتكون من 8 حروف على الأقل</Text>
        )}
        <Input
          mx="3"
          placeholder="البريد الالكتروني"
          size="2xl"
          variant="rounded"
          isInvalid={!reg.test(user.email) && user.email !== ''}
          name="password"
          onChangeText={text => setUser({...user, email: text})}
          isFullWidth={true}
        />
        {!reg.test(user.email) && user.email !== '' && (
          <Text>يرجى إدخال بريد الكتروني صحيح</Text>
        )}

        <Button
          w="100%"
          isDisabled={
            user.username === '' ||
            user.password === '' ||
            user.email === '' ||
            (!reg.test(user.email) && user.email !== '') ||
            (user.password.length < 8 && user.password !== '')
              ? true
              : false
          }
          onPress={handleSubmit}>
          تسجيل حساب
        </Button>
        <Button w="100%" onPress={handleSubmit}>
          تسجيل الدخول
        </Button>
      </VStack>
    </Center>
  );
};

export default SignupPage;
