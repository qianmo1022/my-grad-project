'use client';

import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [form] = Form.useForm();
  const router = useRouter();

  const onFinish = async (values: any) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (response.ok) {
        message.success(data.message);
        router.push('/auth/login');
      } else {
        message.error(data.error);
      }
    } catch (error) {
      message.error('注册失败');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 shadow-lg">
      <h1 className="text-2xl font-bold mb-6">用户注册</h1>
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{ remember: true }}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="用户名" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            { required: true, message: '请输入邮箱地址' },
            { type: 'email', message: '邮箱格式不正确' },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="邮箱" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            { required: true, message: '请输入密码' },
            { min: 6, message: '密码至少6位' },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="密码"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            立即注册
          </Button>
        </Form.Item>
      </Form>
      <div className="text-center">
        <span className="text-gray-600">已有账号？</span>
        <Button type="link" onClick={() => router.push('/auth/login')}>
          立即登录
        </Button>
      </div>
    </div>
  );
}