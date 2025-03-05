'use client';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [form] = Form.useForm();
  const router = useRouter();

  const onFinish = async (values: any) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (response.ok) {
        message.success(data.message);
        router.push('/');
      } else {
        message.error(data.error);
      }
    } catch (error) {
      message.error('登录失败');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 shadow-lg">
      <h1 className="text-2xl font-bold mb-6">用户登录</h1>
      <Form
        form={form}
        name="login"
        onFinish={onFinish}
        initialValues={{ remember: true }}
      >
        <Form.Item
          name="email"
          rules={[
            { required: true, message: '请输入邮箱地址' },
            { type: 'email', message: '邮箱格式不正确' },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="邮箱" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="密码"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            登录
          </Button>
        </Form.Item>
      </Form>
      <div className="text-center">
        <span className="text-gray-600">没有账号？</span>
        <Button type="link" onClick={() => router.push('/auth/register')}>
          立即注册
        </Button>
      </div>
    </div>
  );
}