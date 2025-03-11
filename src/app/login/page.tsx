'use client';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message, Spin } from 'antd';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useUserStore } from '@/stores/userStore';

type loginFormProps = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const [form] = Form.useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { setUser, setIsAuthenticated } = useUserStore();
  const [callbackUrl, setCallbackUrl] = useState('');

  useEffect(() => {
    // 在组件加载时获取URL参数
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const callback = urlParams.get('callbackUrl');
      if (callback) {
        // 确保URL正确解码
        setCallbackUrl(decodeURIComponent(callback));
      }
      console.log('Callback URL:', callback); // 调试信息
    }
  }, []);

  const onFinish = async (values: loginFormProps) => {
    setLoading(true);
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (response.ok) {
        setUser(data.user);
        setIsAuthenticated(true);
        message.success(data.message);
        
        // 使用保存的callbackUrl或默认路径
        console.log('登录成功，准备跳转到:', callbackUrl || '/'); // 调试信息
        setTimeout(() => {
          router.push(callbackUrl || '/');
        }, 300); // 增加延迟时间确保状态更新完成
      } else {
        message.error(data.error);
      }
    } catch (error) {
      console.error('登录失败:', error);
      message.error('登录失败');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 shadow-lg">
      <h1 className="text-2xl font-bold mb-6">用户登录</h1>
      {callbackUrl && (
        <div className="mb-4 text-sm text-blue-600">
          登录后将跳转到您之前访问的页面: {callbackUrl}
        </div>
      )}
      <Spin spinning={loading}>
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
            <Button type="primary" htmlType="submit" loading={loading} block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Spin>
      <div className="text-center">
        <span className="text-gray-600">没有账号？</span>
        <Button type="link" onClick={() => router.push('/register')}>
          立即注册
        </Button>
      </div>
    </div>
  );
}