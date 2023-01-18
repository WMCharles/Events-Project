import Loading from './Loading';
import HomeEvents from './HomeEvents';
import '../css/Events.css'

export default function Events({ events, loading }) {
    return (
        <>
            {loading ? <Loading /> : <HomeEvents loading={loading} events={events}/>}
        </>
    )
}