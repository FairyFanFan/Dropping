# 单元测试
- 文档 https://jestjs.io/docs/getting-started

## 重构
- 不影响老功能

## 功能多到没有人可以完全了解全部
- 迭代功能保卫

## 测试的类别
### E2E
### INT
### UNIT

## JEST 单元测试框架(Facebook)

### 零配置 mock
### GWT given when then
### 实战
- npm init
- npm i jest -D
- npm test 后报错
    - > unittest@1.0.0 test /Users/joy/fxq/study/drop/UnitTest > echo "Error: no test specified" && exit 1 Error: no test specified. npm ERR! Test failed.  See above for more details.
- package.json中添加script test:jest
- npm i
- npm test后报错 if (error?.stack) SyntaxError: Unexpected token '.'
- nvm use 14

### 社交型测试单元 独立型测试单元
#### 社交型 利用  Fake、Stub、Mock、Spy等Jest单元测试的模块间依赖
- jest.mock() 模块隔离




