kubectl create deployment hello-node --image=docker.io/vyakukhin/ex-05-kuber

kubectl get deployments

kubectl get pods

kubectl expose deployment hello-node --type=LoadBalancer --port=3000

kubectl get services

minikube service hello-node

minikube addons enable heapster

clean up:

kubectl delete service hello-node
kubectl delete deployment hello-node

minikube stop

minikube delete
