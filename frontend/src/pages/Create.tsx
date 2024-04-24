import { useState } from "react";
import styled from "styled-components";
import MultiSelect from "../components/CheckBox/MultiSelect";
import TotalPrice from "../components/TotalPrice/TotalPrice";
import '../style/Create.css';

const Create = () => {
    // 이 객체는 각 MultiSelect의 초기 상태를 저장합니다.
    const initialOptions = {
        platform: [
            { name: "Web", price: 2000, description: "description", checked: false },
            { name: "App", price: 2000, description: "description", checked: false },
            { name: "Other", price: 0, description: "description", checked: false }
        ],
        pages: [
            { name: "20 page", price: 2000, description: "description", checked: false },
            { name: "+10 page", price: 1000, description: "description", checked: false },
            { name: "-10page", price: -1000, description: "description", checked: false }
        ],
        design: [
            { name: "Use templates", price: 0, description: "description", checked: false },
            { name: "Customise", price: 1000, description: "description", checked: false }
        ],
        functions: [
            { name: "Admin features", price: 2000, description: "description", checked: false },
            { name: "Content editing tools", price: 1000, description: "description", checked: false },
            { name: "Community", price: 1000, description: "description", checked: false },
            { name: "Other", price: 0, description: "description", checked: false }
        ],
        advanced: [
            { name: "Canlendar", price: 2000, description: "description", checked: false },
            { name: "Map", price: 1000, description: "description", checked: false },
            { name: "GPS", price: 1000, description: "description", checked: false },
            { name: "Drag and drop", price: 1000, description: "description", checked: false },
            { name: "Complex calculations ", price: 2000, description: "description", checked: false },
            { name: "Other", price: 0, description: "description", checked: false }
        ],
        join: [
            { name: "Sign up / Log in", price: 2000, description: "description", checked: false },
            { name: "Mobile verification", price: 1000, description: "description", checked: false },
            { name: "SNS verification", price: 1000, description: "description", checked: false },
            { name: "Other", price: 0, description: "description", checked: false }
        ],
        notifications: [
            { name: "Push alert", price: 2000, description: "description", checked: false },
            { name: "SNS", price: 1000, description: "description", checked: false },
            { name: "Email", price: 1000, description: "description", checked: false },
            { name: "Other", price: 0, description: "description", checked: false }
        ],
				social: [
						{ name: "1:1 Chat", price: 2000, description: "description", checked: false },
						{ name: "Group Chat", price: 1000, description: "description", checked: false },
						{ name: "Follow/Subscribe", price: 1000, description: "description", checked: false },
						{ name: "Share posts", price: 2000, description: "description", checked: false },
						{ name: "Deep link", price: 1000, description: "description", checked: false },
						{ name: "Other", price: 0, description: "description", checked: false }
					],
				native: [
						{ name: "Bluetooth", price: 2000, description: "description", checked: false },
						{ name: "QR code/Barcode", price: 1000, description: "description", checked: false },
						{ name: "Display external pages in app", price: 1000, description: "description", checked: false },
						{ name: "Custom camera in app", price: 1000, description: "description", checked: false },
						{ name: "Sync contacts", price: 2000, description: "description", checked: false },
						{ name: "Other", price: 0, description: "description", checked: false }
					],
        listpage: [
            { name: "List page", price: 2000, description: "description", checked: false },
            { name: "Search", price: 1000, description: "description", checked: false },
            { name: "Filter/Sort by", price: 1000, description: "description", checked: false },
            { name: "Ranking", price: 1000, description: "description", checked: false },
            { name: "Content recommendation", price: 2000, description: "description", checked: false },
            { name: "Other", price: 0, description: "description", checked: false }
        ],
        details: [
            { name: "Details page", price: 2000, description: "description", checked: false },
            { name: "Comment", price: 1000, description: "description", checked: false },
            { name: "Reviews", price: 1000, description: "description", checked: false },
            { name: "Report / Block", price: 1000, description: "description", checked: false },
            { name: "Make a booking", price: 2000, description: "description", checked: false },
            { name: "Other", price: 0, description: "description", checked: false }
        ],
        payment: [
            { name: "Make a booking", price: 2000, description: "description", checked: false },
            { name: "Overseas card payments", price: 1000, description: "description", checked: false },
            { name: "Pay with points", price: 1000, description: "description", checked: false },
            { name: "Coupons/Vouchers", price: 2000, description: "description", checked: false },
            { name: "In app payments", price: 2000, description: "description", checked: false },
            { name: "Other", price: 0, description: "description", checked: false }
        ],
        extraction: [
            { name: "Simple API integration", price: 2000, description: "description", checked: false },
            { name: "Complex API integration", price: 1000, description: "description", checked: false },
            { name: "Data Extraction", price: 1000, description: "description", checked: false },
            { name: "Crawling/Scraping", price: 1000, description: "description", checked: false },
            { name: "Other", price: 0, description: "description", checked: false }
        ],
        localisation: [
            { name: "Multilingual", price: 2000, description: "description", checked: false },
            { name: "Multilingual Content", price: 1000, description: "description", checked: false },
            { name: "Time zone settings", price: 1000, description: "description", checked: false }
        ],
    };

    const [selectedOptions, setSelectedOptions] = useState(initialOptions);

    const selectOptions = (name: string, values: { name: string; price: number; description: string; checked?: boolean; }[]) => {
        setSelectedOptions(prev => ({ ...prev, [name]: values }));
    };


    // selectedOptions에서 선택된 옵션만 필터링하여 렌더링합니다.
    {
        Object.entries(selectedOptions).map(([category, options]) => {
        const selected = options.filter(option => option.checked);
        if (selected.length > 0) { // 선택된 항목이 있을 때만 카테고리 이름과 항목들을 렌더링합니다.
            return (
            <Divcontainer key={category}>
                <h3>{category}</h3>
                {selected.map(option => (
                <p key={option.name}>{option.name} - ${option.price}</p>
                ))}
            </Divcontainer>
            );
        }
        return null; // 선택된 항목이 없으면 null을 반환하여 렌더링하지 않습니다.
        })
    }
  
		
    return (
        <div>
			<div className="create-container">
                <div className="headertext">
                    <p>This is a self-service project estimate builder page. <br />
                                We'll review your selections and provide an accurate estimate.</p>
                </div>
                <Divcontainer>
                <h3>Platform</h3>
                    <MultiSelect onChange={(values) => selectOptions('platform', values)} value={selectedOptions.platform} />
                </Divcontainer>
                <Divcontainer>
                <h3>Number of pages</h3>
                    <MultiSelect onChange={(values) => selectOptions('pages', values)} value={selectedOptions.pages} />
                </Divcontainer>
                <Divcontainer>
                <h3>Design</h3>
                    <MultiSelect onChange={(values) => selectOptions('design', values)} value={selectedOptions.design} />
                </Divcontainer>
                <Divcontainer>
                <h3>Functions</h3>
                    <MultiSelect onChange={(values) => selectOptions('functions', values)} value={selectedOptions.functions} />
                </Divcontainer>
                <Divcontainer>
                <h3>Advanced Features</h3>
                    <MultiSelect onChange={(values) => selectOptions('advanced', values)} value={selectedOptions.advanced} />
                </Divcontainer>
                <Divcontainer>
                <h3>Sign up / Log in</h3>
                    <MultiSelect onChange={(values) => selectOptions('join', values)} value={selectedOptions.join} />
                </Divcontainer>
                <Divcontainer>
                <h3>Notifications</h3>
                    <MultiSelect onChange={(values) => selectOptions('notifications', values)} value={selectedOptions.notifications} />
                </Divcontainer>
                <Divcontainer>
                <h3>Social</h3>
                    <MultiSelect onChange={(values) => selectOptions('social', values)} value={selectedOptions.social} />
                </Divcontainer>
                <Divcontainer>
                <h3>Native features?</h3>
                    <MultiSelect onChange={(values) => selectOptions('native', values)} value={selectedOptions.native} />
                </Divcontainer>
                <Divcontainer>
                <h3>List page</h3>
                    <MultiSelect onChange={(values) => selectOptions('listpage', values)} value={selectedOptions.listpage} />
                </Divcontainer>
                <Divcontainer>
                <h3>Details page</h3>
                    <MultiSelect onChange={(values) => selectOptions('details', values)} value={selectedOptions.details} />
                </Divcontainer>
                <Divcontainer>
                <h3>Payment</h3>
                    <MultiSelect onChange={(values) => selectOptions('payment', values)} value={selectedOptions.payment} />
                </Divcontainer>
                <Divcontainer>
                <h3>API, crawling, and data extraction</h3>
                    <MultiSelect onChange={(values) => selectOptions('extraction', values)} value={selectedOptions.extraction} />
                </Divcontainer>
                <Divcontainer>
                <h3>Localisation</h3>
                    <MultiSelect onChange={(values) => selectOptions('localisation', values)} value={selectedOptions.localisation} />
                </Divcontainer>
                            </div>
                 <TotalPrice selectedOptions={selectedOptions} />

            {/* <h2>선택된 항목:</h2>
            <ul>
                {selectedOptions.platform.filter(item => item.checked).map((item, index) => (
                    <li key={index}>{item.name} - {item.description}</li>
                ))}
            </ul> */}
        </div>
    );
}

export default Create;

const Divcontainer = styled.div`
    display: flex;
		flex-direction: column;
		margin-bottom: 10px;
`;

