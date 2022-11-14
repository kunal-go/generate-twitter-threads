import { expect } from "chai"
import { HttpStatusCode } from "http-rest-api"
import { callRestApi } from "../test/callRestApi"

const method = "post"
const endpoint = "/threads"

describe(`API: ${method} ${endpoint}`, () => {
	describe("Fail Validation Cases", () => {
		it(`Fail without sending tweet-body field`, async () => {
			await callRestApi({
				method,
				endpoint,
				body: {},
				expectedStatusCode: HttpStatusCode.BAD_REQUEST,
			})
		})
	})

	describe("Success Cases", () => {
		const successCases: {
			tweetBody: string
			expectedTweetThread: string[]
		}[] = [
			{
				tweetBody:
					"But I must explain to you how all this mistaken idea of reprobating pleasure and extolling pain arose. To do so, I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? [33] On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammeled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
				expectedTweetThread: [
					"[1/8] But I must explain to you how all this mistaken idea of reprobating pleasure and extolling pain arose. To do so, I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No",
					"[2/8] one rejects, dislikes or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of",
					"[3/8] itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right",
					"[4/8] to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? [33] On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by",
					"[5/8] the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and",
					"[6/8] pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammeled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances",
					"[7/8] and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other",
					"[8/8] greater pleasures, or else he endures pains to avoid worse pains.",
				],
			},
			{
				tweetBody:
					"The Lorem ipsum text is derived from sections 1.10.32 and 1.10.33 of Cicero's 'De finibus bonorum et malorum'.",
				expectedTweetThread: [
					"The Lorem ipsum text is derived from sections 1.10.32 and 1.10.33 of Cicero's 'De finibus bonorum et malorum'.",
				],
			},
			{
				tweetBody:
					"ed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem vel eum i[r]ure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?",
				expectedTweetThread: [
					"[1/4] ed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur",
					"[2/4] aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et",
					"[3/4] dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem vel eum i[r]ure reprehenderit, qui in ea voluptate velit esse, quam nihil",
					"[4/4] molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?",
				],
			},
			{
				tweetBody:
					"Liverpool F.C. was founded following a dispute between the Everton committee and John Houlding, club president and owner of the land at Anfield. After eight years at the stadium, Everton relocated to Goodison Park in 1892 and Houlding founded Liverpool F.C. to play at Anfield. Originally named Everton F.C. and Athletic Grounds Ltd (Everton Athletic for short), the club became Liverpool F.C. in March 1892 and gained official recognition three months later, after The Football Association refused to recognise the club as Everton. Liverpool played their first match on 1 September 1892, a pre-season friendly match against Rotherham Town, which they won 7–1. The team Liverpool fielded against Rotherham was composed entirely of Scottish players – the players who came from Scotland to play in England in those days were known as the Scotch Professors. Manager John McKenna had recruited the players after a scouting trip to Scotland – so they became known as the team of Macs. The team won the Lancashire League in its debut season and joined the Football League Second Division at the start of the 1893–94 season. After the club was promoted to the First Division in 1896, Tom Watson was appointed manager. He led Liverpool to its first league title in 1901, before winning it again in 1906. Liverpool reached its first FA Cup Final in 1914, losing 1–0 to Burnley. It won consecutive League championships in 1922 and 1923, but did not win another trophy until the 1946–47 season, when the club won the First Division for a fifth time under the control of ex-West Ham United centre half George Kay.Liverpool suffered its second Cup Final defeat in 1950, playing against Arsenal. The club was relegated to the Second Division in the 1953–54 season. Soon after Liverpool lost 2–1 to non-league Worcester City in the 1958–59 FA Cup, Bill Shankly was appointed manager. Upon his arrival he released 24 players and converted a boot storage room at Anfield into a room where the coaches could discuss strategy; here, Shankly and other Boot Room members Joe Fagan, Reuben Bennett, and Bob Paisley began reshaping the team. The club was promoted back into the First Division in 1962 and won it in 1964, for the first time in 17 years. In 1965, the club won its first FA Cup. In 1966, the club won the First Division but lost to Borussia Dortmund in the European Cup Winners' Cup final.[11] Liverpool won both the League and the UEFA Cup during the 1972–73 season, and the FA Cup again a year later. Shankly retired soon afterwards and was replaced by his assistant, Bob Paisley.[12] In 1976, Paisley's second season as manager, the club won another League and UEFA Cup double. The following season, the club retained the League title and won the European Cup for the first time, but it lost in the 1977 FA Cup Final. Liverpool retained the European Cup in 1978 and regained the First Division title in 1979. During Paisley's nine seasons as manager Liverpool won 20 trophies, including three European Cups, a UEFA Cup, six League titles and three consecutive League Cups; the only domestic trophy he did not win was the FA Cup.",
				expectedTweetThread: [
					"[1/12] Liverpool F.C. was founded following a dispute between the Everton committee and John Houlding, club president and owner of the land at Anfield. After eight years at the stadium, Everton relocated to Goodison Park in 1892 and Houlding founded Liverpool F.C. to play at",
					"[2/12] Anfield. Originally named Everton F.C. and Athletic Grounds Ltd (Everton Athletic for short), the club became Liverpool F.C. in March 1892 and gained official recognition three months later, after The Football Association refused to recognise the club as Everton.",
					"[3/12] Liverpool played their first match on 1 September 1892, a pre-season friendly match against Rotherham Town, which they won 7–1. The team Liverpool fielded against Rotherham was composed entirely of Scottish players – the players who came from Scotland to play in England",
					"[4/12] in those days were known as the Scotch Professors. Manager John McKenna had recruited the players after a scouting trip to Scotland – so they became known as the team of Macs. The team won the Lancashire League in its debut season and joined the Football League Second",
					"[5/12] Division at the start of the 1893–94 season. After the club was promoted to the First Division in 1896, Tom Watson was appointed manager. He led Liverpool to its first league title in 1901, before winning it again in 1906. Liverpool reached its first FA Cup Final in 1914,",
					"[6/12] losing 1–0 to Burnley. It won consecutive League championships in 1922 and 1923, but did not win another trophy until the 1946–47 season, when the club won the First Division for a fifth time under the control of ex-West Ham United centre half George Kay.Liverpool",
					"[7/12] suffered its second Cup Final defeat in 1950, playing against Arsenal. The club was relegated to the Second Division in the 1953–54 season. Soon after Liverpool lost 2–1 to non-league Worcester City in the 1958–59 FA Cup, Bill Shankly was appointed manager. Upon his",
					"[8/12] arrival he released 24 players and converted a boot storage room at Anfield into a room where the coaches could discuss strategy; here, Shankly and other Boot Room members Joe Fagan, Reuben Bennett, and Bob Paisley began reshaping the team. The club was promoted back into",
					"[9/12] the First Division in 1962 and won it in 1964, for the first time in 17 years. In 1965, the club won its first FA Cup. In 1966, the club won the First Division but lost to Borussia Dortmund in the European Cup Winners' Cup final.[11] Liverpool won both the League and the",
					"[10/12] UEFA Cup during the 1972–73 season, and the FA Cup again a year later. Shankly retired soon afterwards and was replaced by his assistant, Bob Paisley.[12] In 1976, Paisley's second season as manager, the club won another League and UEFA Cup double. The following season,",
					"[11/12] the club retained the League title and won the European Cup for the first time, but it lost in the 1977 FA Cup Final. Liverpool retained the European Cup in 1978 and regained the First Division title in 1979. During Paisley's nine seasons as manager Liverpool won 20",
					"[12/12] trophies, including three European Cups, a UEFA Cup, six League titles and three consecutive League Cups; the only domestic trophy he did not win was the FA Cup.",
				],
			},
		]

		let caseCount = 1
		for (const { tweetBody, expectedTweetThread } of successCases) {
			it(`Success case ${caseCount}`, async () => {
				const response = await callRestApi({
					method,
					endpoint,
					body: { tweetBody },
				})
				expect(response).exist
				expect(response.tweets).exist
				expect(response.tweets).to.deep.equal(expectedTweetThread)
			})
			caseCount++
		}
	})
})
