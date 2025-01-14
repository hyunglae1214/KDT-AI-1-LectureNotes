package kr.eddi.demo.html.comtroller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//RestController가 붙어 있으면 데이터를 JSON이라는 형태로 내보내게 됩니다.
// Web 상에서 데이터를 주고 받는 방식은 대부분 이 JSON방식을 사용하게 됩니다.
// 그러므로 데이터를 주고 받는 상황에서는 전부 RestController를 사용하게 됩니다.
// 물론 Legacy Project의 경우 Backend와 Frontend가 결합되어 있습니다.
// 이런 경우엔 Controller를 사용하게 됩니다.
// 최신 트렌드는 Front쪽과 통신하기 위해 RestController로 Back을 구성합니다.
@Slf4j
@RestController
@RequestMapping("/rest-test")
public class TestRestController {

    //서버란 무엇일까요
    // - 데이터를 처리하는 주체
    // Response를 하면 서버

    //클라이언트란?
    // - 데이터를 요청하는 주체
    //Reauest 하면 클라이언트
    @GetMapping("/first")
    public String firstTest() {
        return "Hello, World!";
    }
}
