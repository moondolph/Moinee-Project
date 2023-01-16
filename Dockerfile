FROM node:18.12.1

COPY . /home/sunghwan644/
# 앱 디렉터리 생성
WORKDIR /home/sunghwan644/
# 앱 의존성 설치
# 가능한 경우(npm@5+) package.json과 package-lock.json을 모두 복사하기 위해
# 와일드카드를 사용


VOLUME [ "/home/sunghwan644" ]

RUN npm install
# 프로덕션을 위한 코드를 빌드하는 경우
# RUN npm ci --only=production
# 앱 소스 추가erver

COPY . .

EXPOSE 9800
ENTRYPOINT [ "node","src/server.js"]