import React from "react";
import { styled } from "styled-components";

const Lists = () => {
  return (
    <Container>
      <Header>
        <div>
          <IconsStyled src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAnElEQVR4nO2YSw7CMAwFe7xW3LHuAfJ6Afs0hXsYISFWtGRFCJ2RvHyWovwmGQYAgJ/E5JdZfjNFvq3i12WNqUWmikdwt+mreWwtMlV8bPqsFpkqGICYgWQJWdebuHR+jC5rTIfNS2wmH1tkAL6BIXOBzBkyp55vYvEeSGZAyJwjc3BaDJkLZM5QCSFziY3qtDpd+JlLfuYA4P+5AxTpg08LWBnlAAAAAElFTkSuQmCC" />
          <main>
            <IconsStyled
              style={{ width: "20px" }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABM0lEQVR4nO2ZUYoCMQyGc5D1RCoeSgTPINtcoBGfdCcVd73Squ/KoCguajpDoR33/yFPQ9N8pH+nMyWCIKiV2K9HLLp1Eg4s4ZgznISDE/1h0WEjCCc6zV08P4XSSYNO5C+YX8H4amCDiG5zF8pW+PAdA7LvAMguAqSAQsWO1iDO63I2X328Gls/Zwkrq4gUuagtiDXxdfyi6lkgKXJRW5CYia0cKXMRQBoIHXkgLC2G2W+CRx4IHmF45CZ4pGseeZtDI9fH80XVsyCc16/SQfJ9WBFAAjrCWFoEj9wJu5Zg+/2H75FZwh90WUE4wfmoFJBjSUEAkc51RIu/6HESfk2Q8+1p4SA+bGI6MsxdKBvxOV/3TZBLVyYFd2McBXGF8dWgvj0twzO6r5dTdCcgCKK/OgEQzBlWz+melgAAAABJRU5ErkJggg=="
            />
            <h2>Trello</h2>
          </main>
          <main>
            <span>Рабочие пространства</span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAo0lEQVR4nO2Uuw6DMAxF8xOt4NM7OJU6ErO2spdKdILC0g79HJA7IYSAvDYfKUoW36M7OMYoiqKkApAbQO5vNZ1jsyQDHA8W6bUvdtRZ5NE6/sbIZVYy/lnI7b64up8A6SMD4Ph3qR+lr3SZca2eRdCgjzxYGiOPlobIk0l95MmlR+TZpFvy7NLV3ZR79k7x4Wwyb5m96WpzpLec7E0VRVHMggnV2whonEUnJgAAAABJRU5ErkJggg=="
              alt="icon"
            />
          </main>
          <main>
            <span>Недавние</span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAo0lEQVR4nO2Uuw6DMAxF8xOt4NM7OJU6ErO2spdKdILC0g79HJA7IYSAvDYfKUoW36M7OMYoiqKkApAbQO5vNZ1jsyQDHA8W6bUvdtRZ5NE6/sbIZVYy/lnI7b64up8A6SMD4Ph3qR+lr3SZca2eRdCgjzxYGiOPlobIk0l95MmlR+TZpFvy7NLV3ZR79k7x4Wwyb5m96WpzpLec7E0VRVHMggnV2whonEUnJgAAAABJRU5ErkJggg=="
              alt="icon"
            />
          </main>
          <main>
            <span>В избранном</span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAo0lEQVR4nO2Uuw6DMAxF8xOt4NM7OJU6ErO2spdKdILC0g79HJA7IYSAvDYfKUoW36M7OMYoiqKkApAbQO5vNZ1jsyQDHA8W6bUvdtRZ5NE6/sbIZVYy/lnI7b64up8A6SMD4Ph3qR+lr3SZca2eRdCgjzxYGiOPlobIk0l95MmlR+TZpFvy7NLV3ZR79k7x4Wwyb5m96WpzpLec7E0VRVHMggnV2whonEUnJgAAAABJRU5ErkJggg=="
              alt="icon"
            />
          </main>
          <main>
            <span>Шаблоны</span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAo0lEQVR4nO2Uuw6DMAxF8xOt4NM7OJU6ErO2spdKdILC0g79HJA7IYSAvDYfKUoW36M7OMYoiqKkApAbQO5vNZ1jsyQDHA8W6bUvdtRZ5NE6/sbIZVYy/lnI7b64up8A6SMD4Ph3qR+lr3SZca2eRdCgjzxYGiOPlobIk0l95MmlR+TZpFvy7NLV3ZR79k7x4Wwyb5m96WpzpLec7E0VRVHMggnV2whonEUnJgAAAABJRU5ErkJggg=="
              alt="icon"
            />
          </main>
          <button>Создать</button>
        </div>
        <div>
            <input placeholder="Поиск" type="text" />
            <NewInconsStyled src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFSklEQVR4nO1YW4gcVRBtjUbX+ETFN6KoaFQUQUQDfuhXomCIxsePikYRYxQEiX9rImjWL5X8TDJz7+6sj3inanazJmtmqiaDRNYHa3xFf0LUGFd/fMYkKqgjdft2T29v9+zu7GsWpqBhprq6qs69VXWrrue1qU1talObPM8zxixUSF0K+AcNPKKQXxTevFscDbRBI9dizwvefCMNPCLOq0LlJg2lJRYI8MjsGC+UbzVmqGNadLldSPs/FTJmqENh5ZbEl734zjka+LBG2pvPlxY1ayRvShcpoKcDxxXw7wrolzC8gB9+fduu05rWny8tEh8V8iFtqmePEVBAG61hZGgaADJo5H8TcmPUo5D+VMgv6b7qqc3Y0sDoFunVUS82b+WzFPLfCvmfnmL5ivAD5HsV8FPGmAWNFKtieYVdIX/FDyvgTRp4eRYqF2YGBk6QR34LTyFn/J23oPblsHJNI93GmAXig/gS8HKGF4uvGvivnBk8s44Q6UnnRH/I09XjFfJ+i7xId6QZyhXp9vou0BuJ2x0jkVFAb/qrSr+qPro6VRZ4udP97SuDg8dFfB5wu/JEfUWBPrTCxcrKuiCv9sHRx52dnUcnGdlsqpdo5N+cwvXeJKhWqx2lkZ934bw/2//eSUlyYlsBf+L7x49FfL7H2X3fZ/TtuCBIymjFUkDDDsidqauFvMWFyBZxbDJAAjAur2TFX061U6ysdBHz0ajK5ReS/zZh9fxQSAFvi8ag4/2Udhr3FOkyCSmFdEQqntckiRMS66Knp0inJ8lISIWVD3ZcHgJE2i68HPJdnq0evtOdEYE1bqVzqasE9IyrQFlviqSQ8mPiPUYKScdlNNJzzocucajiC1SWhR8Bv+Zid1VcYagEqDxe6E2UcoXKfeOV/m6gR53T+Vihke9YkO6x22N4cd1J/tw62Ve6NhUI8j6RkfNjqkAUlC8NyrGXJoN8nVu4TwNeFktXOXB7BMiPViBSNpN4CYrtuTGVLiCg3t7Bk52TB9Nksv3lc53T38d5toeTJJM/oyqW48lZkqZ4OnuniegzZqjDATmSyJN2Ie50Eri5BpK3PZbNh0MBTzqGOhAZfJBr0RKqgQ4Iz9bnFgGSlRbHHZ4Br9vweWG4BcneXahcGQgo5N22ABR23tAqQHqKdKNraYbjya6BvxCnOV5+NZByp+2aVgGiXT8YPbeC8quRSXaka8yBWCw/ErQerQJEIb8VzDN1Hq1z1W6DJ8e7W/3tIVKgi6WH0Uh/pJXX2QSy0VRPFF/Ep+i5pYAGw0NZmkYRiDeNGniXzR2k++caiAZ+0IXVu6MqFtDBsGn0ldAHfsKX7w7RFuihIJHibXxmoHqGM/zzdAGRhdTItYyhU+KDlUb60gIp0AMJbfzQ2EQC2hpRsFAhf+0PVuUVUeXdULnZlcLd0wbEVU+FdH2UL2ETtC+ZzPCxdT6/7firE0fdaM8lOyQgO6vVY5LvrNJniMkD4Uy86AiJbfEhGi1yVNipND7qRi8fZLBvZFBWJbyzSruSaYK6i7zUJe6B6Eg7qcuHyVwHSZw6JV81MxWmkeShRtrrwuvxpq+DJnJBZy8kgL6JJ950kUJe5aLiu0YNa8MLuokZcocn0mfjXRE1Q0YqlJuF7NQ3EyR9l71LsklWWjIjRrxZsCOTWXBozdoD9Wlw2kghV2cbiELa6c0VSdsgTsgYGn8XzA9yqee1OungVgZ5bcK7Z9079lqdNNJtzlnpFNbKzsgjv4Vne7oiL/XmAyng9Q3ifp03n0hBZZmdPiVnpN1G5nmzE21qU5va5M00/Q8Jv2BRFdUBQQAAAABJRU5ErkJggg==" alt="alarm--v1"/>
            <NewInconsStyled src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEnElEQVR4nO1azY8URRQvAggGgiKfRzwajfJXCAT84sbXDSIXYINcYb0J4gUDiZN1qoYhXHrq9YaFHZx5b+gQlACugBfZFTjpciDoTXSDZsyrrprtZHtmd7t7ZhrCSzqZ3e551a/e169+b4R4KS+oDHnfvaE0faw0nlSAowpwXGr8UwJNmSv8fM/c03hS+vjR+UvXVoo8iFLBUqUbe5TGugL6TwE153NJoH8lYK1Yod2nqtUlPTfA866/qjR9JjU9ar2Ypn8k4BUFeJQ9c9avv8U7XiiMLeaLP/P/Qq/RMQkU8Hci35+UGg/z5vTECAW4VQE9jOzsjxJob8HD1+atazh4Xfn1fVLjWMtLGh+UfNrS5TDCb6Z3EH8qVRrvZ6YfcLPUdCfioTOZe0d5wXp+cbvAXwrwgOd5C7MPWW+h1HRIAj513h66QOsyUV72am+yu21y3vsWau+ILkupQu9KTROhMXif3yGVwqJXXdNSqOlWYSRYLXok5y9dWykBv7eeechRkSYnTDhJTdfL5doy0WMpl2vLFOANF2aJcsYlNocTN7v5ft/zvFck4AlTojVNKo3H+X/z1XPWx1WRqDiTpMSaxE6aE/ziM5qgxuOJcwZcAcDNc292rT6BB0RCMV6YYQhNJtYHNOCSf04hJqFxxPWJNCU2a0MGg2CR0njX6hrovLgKljrYkbbZxYWWBPoijc6ST1tCPfh7R2zG4M1VCJFSOLGNMSbRkyd7VJrN5oLpSoo7RTtRQGh3bq/IqUigT21LuBz7AJdYhtWMSJMAwN42SppSGp/FvmcJ6BOb5A2Rc5GAV61XPoi7+ZUtb0dFzkUBfm5T4Mu4m6OmWkHjw/QLxZ8IRUZSctEDOBK3+K98k09xuTek0njbGjIet/gffDMJrmon3TKkMBKstjofz7hpKgFQM22t74Uhp6rVJY4neHENUc9RaBW96pq2oZVlskd09iPZ0ZRfZgDzboj069vblt9WQ9R0LO+GqI4NkRnAECJfyb1HIIQoRR+3tQNjBjQyA5hXQ4ZCcGtA47lz1RWxDzGhbBb16/vyaojyab/Nj9EOC+Mue2gZy6MhzWZzgQS6bcKq0tjRsdHwMTI0pr4pb4YUfdxmjxq/zTqGMNR+WBFup+V3szRkMAgWScCfbVgdnH1xQ0BYrlfToSzRbxqDpNtgTRNzHgpF2IqnTI712xA1XNsoAf9OxO6Y+YTdAaYtRZ+kaHAV3rfv8nUyEpuJ4zAmb/SDxD7tBculxpu2kt5MPGe0uzFuocst/lv0ckoM+IM14kHqgQ8PWSKunShC4z3RZVHDtY1uTYPKh4MNmSjm3XBhZlnxAS6HImMZ5BKr8bBLbA6nMtTWZrpIOPgJC4BtSnezmr4aKhRw63SfCBO7q7N3nk9E3G5Ye6Yxk/yKweSBT/sd7FA2lLKcFs+log04OGORwBTDa6lpkHknPsVx2WYOgC/+zEMjPhTxM+ZZyxM42KEAD/blFxAGm2ncyYSyOQLM0ghnXBqfMYplANgXA+KECWXmYvnUpjRd5Nmj1PRk+kc19ERq+oWPp/wMP9v2PPFSxPMv/wMi2vSl0hzbvgAAAABJRU5ErkJggg=="></NewInconsStyled>
            <NewInconsStyled src="https://img.icons8.com/fluency/48/000000/test-account.png" alt="test-account"/>
        </div>
      </Header>
      <TransparentHeader></TransparentHeader>
    </Container>
  );
};

export default Lists;

const Container = styled("div")`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-image: url("https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/e9434c62b9b40657bdbbc9b876020e31/photo-1683481951374-1d62b42afaba.jpg");
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.3);
  background-position: center;
`;

const Header = styled("header")`
  width: 100%;
  height: 3rem;
  background-color: #1d2125;
  border-bottom: 1px solid #2f353a;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    & input {
      padding: 6px 10px;
      padding-left: 15px;
      border-radius: 5px;
      border: 1px solid #636567;
      background-color: #22272b;
      color: #788594;
      font-size: 15px;
      &::placeholder {
        color: #b5b5b5;
      font-size: 15px;
      }
    }
  }
  & main {
    height: 2rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 8px;
    &:hover {
      background-color: #3e454c;
    }
    & * {
      cursor: pointer;
    }
    & h2 {
      color: #9eacba;
    }
    & span {
      color: #9eacba;
      font-weight: 350;
    }
    & img {
      width: 16px;
    }
  }
  & button {
    padding: 8px 10px;
    border-radius: 4px;
    background-color: #579dff;
    color: #1d2125;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #75b0ff;
    }
  }
`;

const TransparentHeader = styled("header")`
  width: 100%;
  height: 3.5rem;
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
`;

const IconsStyled = styled("img")`
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover {
    background-color: #3e454c;
  }
`;

const NewInconsStyled = styled("img")`
  width: 25px;
  height: 25px;
`