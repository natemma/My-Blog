## Особенности проекта
Современный стек технологий: Next.js 15 (App Router), TypeScript и Tailwind CSS

Адаптивный дизайн: Оптимизация для разных размеров экрана

Модульные компоненты: Четкая структура компонентов для удобства поддержки и расширения

Чистый и современный UI: Современный дизайн с акцентом на пользовательский опыт

## Стек технологий
Фреймворк: Next.js 15

Языки: TypeScript + JavaScript + CSS

Стилизация: Tailwind CSS

Менеджер пакетов: npm / yarn / pnpm / bun

## Структура проекта

My-Blog/
├── app/                            # Страницы и макеты Next.js App Router
├── components/                     # Используемые компоненты
      ├── auth/                     # Компоненты аутентификации
           ├── LoginForm.tsx        # Форма для логина
           ├── RegisterForm.tsx     # Форма для регистрации
      ├── comments/                 # Компоненты комментов
           ├── CommentForm.tsx      # Форма для написания нового комментарий
           ├── CommentItem.tsx      # Отдельный элемент комментария 
           ├── CommentList.tsx      # Контейнер для списка комментариев 
      ├── ArticleCard.tsx           # Компоненты отдельной карточки поста
      ├── ArticleGrid.tsx           # Сетка постов 
      ├── Footer.tsx                # Футер сайта 
      ├── Header.tsx                # Хэдер сайта 
├── public/                         # Статические ресурсы (изображения и т.д.)
├── types/                          # Определения типов TypeScript
├── .gitignore                      # Конфигурация Git ignore
├── eslint.config.mjs               # Конфигурация ESLint
├── next.config.ts                  # Конфигурация Next.js
├── package.json                    # Зависимости и скрипты проекта
├── postcss.config.mjs              # Конфигурация PostCSS
├── tailwind.config.ts              # Конфигурация Tailwind CSS
└── tsconfig.json                   # Конфигурация TypeScript


## Шаги установки
1. Клонировать проект

bash
git clone https://github.com/natemma/My-Blog.git
cd My-Blog

2. Установить зависимости

bash
npm install
# или используйте другой менеджер пакетов
# yarn install
# pnpm install
# bun install

3. Запустить сервер разработки

bash
npm run dev
# или
yarn dev
# или
pnpm dev
# или
bun dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Лицензия
Это учебный проект, созданный в образовательных целях.


