import './App.css';
import JournalItem from "./components/JournalItem/JournalItem";
import CardButton from "./components/CardButton/CardButton";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import Header from "./components/Header/Header";
import JournalList from "./components/JournalList/JournalList";
import Body from "./layouts/Body/Body";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton.jsx";

function App() {
    const data = [
        {
            title: 'CardButton',
            text: 'Lorem Ipsum the sfdfs sfs ffsegsrgsgggg',
            date: new Date()
        },
        {
            title: 'Journal',
            text: 'Lorem Ipsum',
            date: new Date()
        }
    ];
    return (
        <div className="app">
            <LeftPanel>
                <Header/>
                <JournalAddButton/>
                <JournalList>
                    <CardButton>
                        <JournalItem
                            title={data[0].title}
                            text={data[0].text}
                            date={data[0].date}
                        />
                    </CardButton>
                    <CardButton>
                        <JournalItem
                            title={data[1].title}
                            text={data[1].text}
                            date={data[1].date}
                        />
                    </CardButton>
                </JournalList>
            </LeftPanel>
            <Body>
                body
            </Body>
        </div>
    );
}

export default App;
