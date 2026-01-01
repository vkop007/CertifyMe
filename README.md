# CertifyMe

> A modern certificate generation and management platform built with Next.js

## 📋 Overview

CertifyMe is a comprehensive web application designed to streamline the creation, customization, and management of digital certificates. Built with modern web technologies, it provides an intuitive interface for generating professional certificates with customizable templates, real-time preview, and seamless email delivery.

## ⚠️ License & Usage

**All Rights Reserved** - This repository and all its contents are proprietary and confidential. 

Unauthorized access, use, modification, distribution, or reproduction of this software is strictly prohibited. All intellectual property rights are reserved to the copyright holder.

For licensing inquiries, please contact the copyright holder directly.

## 🚀 Features

- **Certificate Generation**: Create professional certificates with ease
- **Customizable Templates**: Design your own certificate layouts
- **Real-time Preview**: See your changes instantly
- **Email Integration**: Send certificates directly to recipients
- **Country Code Support**: Multi-country extension support
- **Responsive Design**: Works seamlessly across all devices
- **Payment Integration**: Razorpay integration for transactions
- **User Management**: Secure authentication and user management

## 🛠️ Tech Stack

- **Frontend**: React 19, Next.js 16.1.1, TypeScript
- **Styling**: Tailwind CSS 4, PostCSS
- **State Management**: Redux, Redux Saga
- **Email Service**: Nodemailer 7.0.12
- **Payment Gateway**: Razorpay 2.9.6
- **UI Components**: Lucide React, React Email
- **Development**: ESLint, Bun

## 📦 Project Structure

```
.
├── app/              # Next.js app directory
├── components/       # Reusable React components
├── lib/              # Utility functions and libraries
├── public/           # Static assets
├── package.json      # Dependencies configuration
├── tsconfig.json     # TypeScript configuration
└── LICENSE           # All Rights Reserved
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v18+)
- Bun or npm/yarn/pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/vkop007/certifyme.git
cd certifyme

# Install dependencies
bun install
# or
npm install
```

### Development

```bash
bun dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Build for Production

```bash
bun run build
bun run start
```

## 📝 Environment Configuration

Create a `.env.local` file in the root directory:

```env
# Email Configuration
NODEMAILER_USER=your_email@gmail.com
NODEMAILER_PASSWORD=your_app_password

# Payment Gateway
RZP_KEY_ID=your_razorpay_key
RZP_KEY_SECRET=your_razorpay_secret

# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
```


## 📄 License

This project is licensed under the **All Rights Reserved** license. See the [LICENSE](./LICENSE) file for details.

**IMPORTANT**: No permission is granted to use, modify, distribute, or reproduce this software without explicit written consent from the copyright holder.

## 📞 Support & Contact

For licensing inquiries, feature requests, or other communications, please contact the copyright holder directly through GitHub.

## ⚖️ Legal Notice

This software is provided "as-is" without warranty of any kind. The copyright holder disclaims all warranties, including but not limited to merchantability, fitness for a particular purpose, and noninfringement. Unauthorized use may violate applicable laws and regulations.

---

**Last Updated**: January 2, 2026
